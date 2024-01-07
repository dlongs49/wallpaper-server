/*
Navicat MySQL Data Transfer

Source Server         : wallpaper
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : wallpaper_db

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2024-01-07 17:43:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for collect_apply
-- ----------------------------
DROP TABLE IF EXISTS `collect_apply`;
CREATE TABLE `collect_apply` (
  `id` varchar(255) NOT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `wallpaper_title` varchar(255) DEFAULT NULL,
  `wallpaper_id` varchar(255) DEFAULT NULL,
  `wallpaper_url` varchar(255) DEFAULT NULL,
  `wallpaper_type` int(11) DEFAULT '0',
  `opear_type` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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

-- ----------------------------
-- Table structure for wallpaper
-- ----------------------------
DROP TABLE IF EXISTS `wallpaper`;
CREATE TABLE `wallpaper` (
  `id` varchar(255) NOT NULL,
  `type_id` varchar(255) DEFAULT NULL,
  `type_name` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `url_type` int(10) DEFAULT NULL,
  `is_like` int(10) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Table structure for wallpaper_type
-- ----------------------------
DROP TABLE IF EXISTS `wallpaper_type`;
CREATE TABLE `wallpaper_type` (
  `id` varchar(255) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `cover_url` varchar(255) DEFAULT NULL,
  `cover_type` int(11) DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
