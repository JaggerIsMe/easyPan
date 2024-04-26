/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50719
Source Host           : localhost:3306
Source Database       : easypan

Target Server Type    : MYSQL
Target Server Version : 50719
File Encoding         : 65001

Date: 2024-04-26 16:21:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for email_code
-- ----------------------------
DROP TABLE IF EXISTS `email_code`;
CREATE TABLE `email_code` (
  `email` varchar(150) NOT NULL COMMENT '邮箱',
  `code` varchar(5) NOT NULL COMMENT '编号',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `status` tinyint(1) DEFAULT NULL COMMENT '0未使用1已使用',
  PRIMARY KEY (`email`,`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='邮箱验证码';

-- ----------------------------
-- Table structure for file_info
-- ----------------------------
DROP TABLE IF EXISTS `file_info`;
CREATE TABLE `file_info` (
  `file_id` varchar(10) NOT NULL COMMENT '文件ID',
  `user_id` varchar(10) NOT NULL COMMENT '用户ID',
  `file_md5` varchar(32) DEFAULT NULL COMMENT '文件MD5值',
  `file_pid` varchar(10) DEFAULT NULL COMMENT '父级ID',
  `file_size` bigint(20) DEFAULT NULL COMMENT '文件大小',
  `file_name` varchar(200) DEFAULT NULL COMMENT '文件名',
  `file_cover` varchar(100) DEFAULT NULL COMMENT '文件封面',
  `file_path` varchar(100) DEFAULT NULL COMMENT '文件路径',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `last_update_time` datetime DEFAULT NULL COMMENT '最后更新时间',
  `folder_type` tinyint(1) DEFAULT NULL COMMENT '0文件1目录',
  `file_category` tinyint(1) DEFAULT NULL COMMENT '文件分类_1视频_2音频_3图片_4文档_5其它',
  `file_type` tinyint(1) DEFAULT NULL COMMENT '1视频_2音频_3图片_4pdf_5doc_6excel_7txt_9zip_10其它',
  `status` tinyint(1) DEFAULT NULL COMMENT '0转码中_1转码失败_2转码成功',
  `recovery_time` datetime DEFAULT NULL COMMENT '进入回收站时间',
  `del_flag` tinyint(1) DEFAULT NULL COMMENT '标记删除_0删除_1回收站_2正常',
  PRIMARY KEY (`file_id`,`user_id`),
  KEY `idx_create_time` (`create_time`) USING BTREE,
  KEY `idx_user_id` (`user_id`),
  KEY `idx_md5` (`file_md5`) USING BTREE,
  KEY `idx_file_pid` (`file_pid`),
  KEY `idx_del_flag` (`del_flag`),
  KEY `idx_recover_time` (`recovery_time`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='文件信息表';

-- ----------------------------
-- Table structure for file_share
-- ----------------------------
DROP TABLE IF EXISTS `file_share`;
CREATE TABLE `file_share` (
  `share_id` varchar(20) NOT NULL COMMENT '分享ID',
  `file_id` varchar(10) DEFAULT NULL COMMENT '文件ID',
  `user_id` varchar(10) DEFAULT NULL COMMENT '分享人ID',
  `valid_type` tinyint(1) DEFAULT NULL COMMENT '有效期类型_0: 1天_1:7天_2:30天_3:永久有效',
  `expire_time` datetime DEFAULT NULL COMMENT '失效时间',
  `share_time` datetime DEFAULT NULL COMMENT '分享时间',
  `code` varchar(5) DEFAULT NULL COMMENT '提取码',
  `show_count` int(11) DEFAULT '0' COMMENT '浏览次数',
  PRIMARY KEY (`share_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='分享信息';

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `user_id` varchar(10) NOT NULL COMMENT '用户ID',
  `nick_name` varchar(20) DEFAULT NULL COMMENT '昵称',
  `email` varchar(150) DEFAULT NULL COMMENT '邮箱',
  `qq_open_id` varchar(35) DEFAULT NULL COMMENT 'qqOpenid',
  `qq_avatar` varchar(150) DEFAULT NULL COMMENT 'qq头像',
  `password` varchar(32) DEFAULT NULL COMMENT '密码 ',
  `join_time` datetime DEFAULT NULL COMMENT '加入时间',
  `last_login_time` datetime DEFAULT NULL COMMENT '最后登录时间',
  `status` tinyint(1) DEFAULT NULL COMMENT '0禁用1启用',
  `use_space` bigint(20) DEFAULT NULL COMMENT '使用单位空间byte',
  `total_space` bigint(20) DEFAULT NULL COMMENT '总空间',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `key_email` (`email`) USING BTREE,
  UNIQUE KEY `key_qq_open_id` (`qq_open_id`) USING BTREE,
  UNIQUE KEY `key_nick_name` (`nick_name`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户信息';
