CREATE TABLE `collaboraters` (
  `id_collaboraters` int(255) NOT NULL AUTO_INCREMENT,
  `name_collaboraters` varchar(45) DEFAULT NULL,
  `password` varchar(260) DEFAULT NULL,
  PRIMARY KEY (`id_collaboraters`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

CREATE TABLE `managers` (
  `id_managers` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(260) DEFAULT NULL,
  PRIMARY KEY (`id_managers`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

CREATE TABLE `project_snark` (
  `id_project` int(255) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `id_jira` varchar(255) DEFAULT NULL,
  `nb_tickets` int(11) DEFAULT NULL,
  `color` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_project`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8;

CREATE TABLE `tickets_finish` (
  `id_tickets_finish` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `date` varchar(45) DEFAULT NULL,
  `collaboraters_id_collaboraters` int(11) DEFAULT NULL,
  `projet_id_projet` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_tickets_finish`),
  KEY `fk_tacheProgrammée_collaborateurs1_idx` (`collaboraters_id_collaboraters`),
  KEY `fk_tacheProgrammée_Projet1_idx` (`projet_id_projet`)
) ENGINE=InnoDB AUTO_INCREMENT=112 DEFAULT CHARSET=utf8;

CREATE TABLE `tickets_progress` (
  `id_tickets_progress` int(11) NOT NULL AUTO_INCREMENT,
  `collaboraters_id_collaboraters` int(255) NOT NULL,
  `project_id_project` int(250) NOT NULL,
  `nb_ticket` int(120) DEFAULT NULL,
  `week` int(53) DEFAULT NULL,
  PRIMARY KEY (`id_tickets_progress`),
  KEY `fk_tacheEffectuée_collaborateurs1_idx` (`collaboraters_id_collaboraters`),
  KEY `fk_tacheEffectuée_Projet1_idx` (`project_id_project`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;



