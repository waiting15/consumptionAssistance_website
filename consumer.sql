-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: consumer
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `daka`
--

DROP TABLE IF EXISTS `daka`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `daka` (
  `project_id` int NOT NULL,
  `daka1` int DEFAULT NULL,
  `daka2` varchar(5) DEFAULT NULL,
  `daka3_1` int DEFAULT NULL,
  `daka3_2` int DEFAULT NULL,
  `dakadays` date DEFAULT NULL,
  `dakatimes` int DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `daka`
--

LOCK TABLES `daka` WRITE;
/*!40000 ALTER TABLE `daka` DISABLE KEYS */;
INSERT INTO `daka` VALUES (1,1,NULL,NULL,NULL,'2022-04-20',1),(2,4,'B2',NULL,NULL,'2022-04-20',2),(3,4,'B1',2,1,'2022-04-20',3),(4,3,NULL,NULL,NULL,'2022-04-20',1),(5,NULL,NULL,NULL,NULL,NULL,0);
/*!40000 ALTER TABLE `daka` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `project`
--

DROP TABLE IF EXISTS `project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `project` (
  `user_id` int NOT NULL,
  `project_id` int NOT NULL AUTO_INCREMENT,
  `project_name` varchar(64) NOT NULL,
  `budget` int DEFAULT NULL,
  `demands` varchar(256) DEFAULT NULL,
  `suggest` varchar(64) DEFAULT NULL,
  `initDay` date DEFAULT NULL,
  PRIMARY KEY (`project_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `project`
--

LOCK TABLES `project` WRITE;
/*!40000 ALTER TABLE `project` DISABLE KEYS */;
INSERT INTO `project` VALUES (1,1,'???????????????',6500,'????????????????????????????????????',NULL,NULL),(1,2,'???????????????',1800,'???????????????????????????',NULL,NULL),(1,3,'???????????????',1999,'????????????????????????????????????????????????','?????????','2022-04-17'),(1,4,'??????4?????????',300,'?????????????????????????????????????????????????????????????????????',NULL,'2022-04-20'),(1,5,'ps5',4000,'?????????????????????????????????',NULL,'2022-04-20');
/*!40000 ALTER TABLE `project` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_info`
--

DROP TABLE IF EXISTS `user_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_info` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(64) NOT NULL,
  `user_pwd` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_info`
--

LOCK TABLES `user_info` WRITE;
/*!40000 ALTER TABLE `user_info` DISABLE KEYS */;
INSERT INTO `user_info` VALUES (1,'guest','guest123'),(2,'123456','234567'),(3,'23456','34567'),(4,'john','john123'),(5,'testuser','testuser123'),(6,'fashionkon','1234567890'),(7,'monkey','monkey123');
/*!40000 ALTER TABLE `user_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-04-22 16:13:35
