const express = require("express");
const path = require("path");
require("./dbSetup");

// Initialize the express app
const app = express();
const port = 3000;

// Serve static file (index.html)
app.use(express.static(path.join(__dirname, "public")));

// Helper function to recursively find ancestors
function findAncestorsAndChildren(
  treeData,
  nodeId,
  resultSet,
  visited = new Set()
) {
  // Prevent infinite recursion by checking if the node was already visited
  if (visited.has(nodeId)) {
    return; // Stop further recursion
  }

  visited.add(nodeId); // Mark the node as visited

  treeData.forEach((item) => {
    if (item.id === nodeId || resultSet.has(item)) {
      resultSet.add(item); // Add the current node to the result set

      // Find children and recursively add them
      const children = treeData.filter(
        (child) => child.pef_item_id === item.id
      );
      children.forEach((child) => {
        if (!visited.has(child.id)) {
          findAncestorsAndChildren(treeData, child.id, resultSet, visited); // Recursive call for children
        }
      });

      // Find the parent of the current node and recursively add it
      if (item.pef_item_id !== null) {
        const parent = treeData.find(
          (parentItem) => parentItem.id === item.pef_item_id
        );
        if (parent && !visited.has(parent.id)) {
          findAncestorsAndChildren(treeData, parent.id, resultSet, visited); // Recursive call for parent
        }
      }
    }
  });
}

// Route to test database connection and query data
// Updated route to query and filter data
app.get("/tree-data", (req, res) => {
  const db = require("./dbSetup");
  const searchQuery = req.query.searchQuery ? req.query.searchQuery : "";

  const query = "SELECT * FROM atest"; // query everything from atest table

  // display the query
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data");
    } else {
      if (searchQuery) {
        // Filter nodes based on the search query (case-insensitive match)
        const filteredNodes = results.filter((node) =>
          node.name.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Build a set of nodes to return, including ancestors and children
        const resultSet = new Set();

        filteredNodes.forEach((node) => {
          findAncestorsAndChildren(results, node.id, resultSet); // Find and add ancestors + children
        });

        // Convert the result set to an array for response
        const filteredResults = Array.from(resultSet);
        res.json(filteredResults);
      } else {
        // No search query, return full tree
        res.json(results);
      }
    }
  });
});

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
