/*
Navicat MySQL Data Transfer

Source Server         : wallpaper
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : wallpaper_db

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2024-01-03 22:01:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(255) NOT NULL,
  `uname` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `reg_time` datetime DEFAULT NULL,
  `sex` varchar(255) DEFAULT NULL,
  `sex_tit` varchar(255) DEFAULT NULL,
  `nation` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
