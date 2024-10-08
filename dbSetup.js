const mysql = require("mysql2");

// Creating the MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "moonstone_test123",
  database: "atest_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err);
    return;
  }
  console.log("MySQL database connected...");

  // create query to drop table
  const dropTableQuery = `
  DROP TABLE IF EXISTS atest; `;

  // create query to create table
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS atest (
    id int(10) NOT NULL DEFAULT '0',
    name varchar(60) NOT NULL,
    pef_item_id int(11) DEFAULT NULL,
    order_no int(10) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

  // create query to insert data
  const insertTableQuery = `
  INSERT INTO atest (id, name, pef_item_id, order_no) VALUES
    (8653, 'treeItems', 21510, 15),
    (21510, 'centerBorder', 53846, 25),
    (21513, 'tabPanelSouth', 53846, 35),
    (21515, 'containerEast', 53846, 30),
    (21516, 'tabItemSettings', 21513, 40),
    (21517, 'tabItemActions', 21513, 50),
    (21518, 'tabItemPermissions', 21513, 60),
    (21519, 'tabItemTooltips', 21513, 5),
    (21945, 'tabContainerSettings', 21513, 70),
    (21946, 'treeComponents', 21510, 10),
    (21947, 'dropdownContainer', 22144, 1815),
    (21955, 'tabContainerPorts', 21513, 85),
    (21957, 'tabContainerActions', 21513, 75),
    (21958, 'tabContainerPermissions', 21513, 80),
    (21961, 'buttonPreviewContainer', 22144, 1820),
    (21969, 'containerContPorts', 21955, 20),
    (21970, 'containerItemSettings', 21516, 20),
    (22144, 'hboxNorth', 53846, 15),
    (22145, 'dropinId', 22144, 1835),
    (22147, 'buttonClearFiles', 22144, 1830),
    (22148, 'cpCurrentContainer', 59868, 20),
    (22149, 'clearCache', 53844, 25),
    (22150, 'clearAll', 53844, 50),
    (22312, 'containerTooltips', 21519, 65),
    (22313, 'containerItemEvents', 21517, 65),
    (22314, 'containerItemPermissions', 21518, 65),
    (22316, 'containerContSettings', 21945, 85),
    (22317, 'containerContActions', 21957, 115),
    (22318, 'containerContPermissions', 21958, 100),
    (53765, 'containerWest', 53846, 20),
    (53841, 'clearCrudC', 22148, 15), 
    (53842, 'clearCacheC', 22148, 20), 
    (53843, 'clearAllC', 22148, 35), 
    (53844, 'apCurrentContainer', 59874, 15), 
    (53845, 'clearCrud', 53844, 20), 
    (53846, 'layoutborder', NULL, 55), 
    (53856, 'buttonApplyDropin', 22144, 1840), 
    (59868, 'currentPermgroup', 22147, 55), 
    (59869, 'cpAllContainers', 59868, 25), 
    (59870, 'crudFiles', 59869, 15), 
    (59871, 'cacheFiles', 59869, 20), 
    (59872, 'permissionFiles', 59869, 25), 
    (59873, 'allThree', 59869, 30), 
    (59874, 'allPermgroups', 22147, 1860), 
    (59875, 'clearPermissionC', 22148, 25), 
    (59876, 'apAllContainers', 59874, 20), 
    (59877, 'clearCrudA', 59876, 15), 
    (59878, 'clearCacheA', 59876, 20), 
    (59879, 'clearPermissionA', 59876, 25), 
    (59880, 'clearAllA', 59876, 30), 
    (59881, 'clearPermission', 53844, 45), 
    (59964, 'dropdownItemEvent', 22144, 1850), 
    (59965, 'dropdownContainerEvent', 22144, 1860), 
    (59967, 'tabActions', 21513, 90),
    (59968, 'containerActions', 59967, 65), 
    (60180, 'removeRedundantFiles', 22147, 1865);`;

  // Execute the queries in sequence
  db.query(dropTableQuery, (err, result) => {
    if (err) throw err;
    console.log("Table dropped (if existed)");

    db.query(createTableQuery, (err, result) => {
      if (err) throw err;
      console.log("Table created.");

      db.query(insertTableQuery, (err, result) => {
        if (err) throw err;
        console.log("Data has been inserted successfully.");
      });
    });
  });
});

module.exports = db;
