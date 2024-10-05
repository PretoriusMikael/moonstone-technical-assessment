DROP TABLE IF EXISTS `atest`;
CREATE TABLE IF NOT EXISTS `atest` (
  `id` int(10) NOT NULL DEFAULT '0',
  `name` varchar(60) NOT NULL,
  `pef_item_id` int(11) DEFAULT NULL,
  `order_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `atest` (`id`, `name`, `pef_item_id`, `order_no`) VALUES
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
    (53765, 'containerWest', 53846, 20);
