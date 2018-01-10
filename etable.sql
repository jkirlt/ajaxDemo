/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : etable

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-01-10 14:20:05
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for et_data
-- ----------------------------
DROP TABLE IF EXISTS `et_data`;
CREATE TABLE `et_data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `c_a` varchar(30) DEFAULT NULL,
  `c_b` varchar(30) DEFAULT NULL,
  `c_c` varchar(30) DEFAULT NULL,
  `c_d` varchar(30) DEFAULT NULL,
  `c_e` varchar(30) DEFAULT NULL,
  `c_f` varchar(30) DEFAULT NULL,
  `c_g` varchar(30) DEFAULT NULL,
  `c_h` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of et_data
-- ----------------------------
INSERT INTO `et_data` VALUES ('25', '苟利', '国家', '生死', '以', '岂因', '祸福', '避趋', '之');
INSERT INTO `et_data` VALUES ('26', 'too', 'young', 'too', 'simple', '图', '样', '图', '森破');
INSERT INTO `et_data` VALUES ('27', '美国的', '华莱士', '比', '你们', '不知道', '高到', '哪里', '去了');
INSERT INTO `et_data` VALUES ('28', '你们', '呀', '不要', '想', '着', '弄个', '大', '新闻');
INSERT INTO `et_data` VALUES ('24', '中国', '有一句', '话', '叫', '闷声', '大发财', '这是', '坠吼的');
INSERT INTO `et_data` VALUES ('23', '你们', '给我', '搞', '的', '这本', '东西', '啊', 'Excited！');
INSERT INTO `et_data` VALUES ('29', '然后', '把我', '批判', '一番！', '你们呀！', 'naive！', 'I\'m', 'angry！');
INSERT INTO `et_data` VALUES ('30', '作为', '一个', '长者', '有必要', '告诉', '你们', '一些', '人生经验');
INSERT INTO `et_data` VALUES ('31', '我', '没有', '说', '钦定，', '没有', '任何', '这个', '意思');
INSERT INTO `et_data` VALUES ('32', '连任', '也', '要', '按照', '香港', '的', '法律', '呀！');
INSERT INTO `et_data` VALUES ('33', '要要', '要按照', '当然', '我们的', '决定权', '也是', '很重要', '滴');
INSERT INTO `et_data` VALUES ('34', '如果', '你们', '在', '报道上', '有偏差', '你们', '要', '负责');
INSERT INTO `et_data` VALUES ('35', '我是', '身经百战', '了', '见得多了', '西方的', '哪个国家', '我没', '去过');
INSERT INTO `et_data` VALUES ('36', '你们', '要', '问我', '滋瓷', '不滋瓷', '我', '说', '无可奉告');
INSERT INTO `et_data` VALUES ('37', '任何', '事', '都要', '按照', '基本法', '要', '按照', '选举法');
INSERT INTO `et_data` VALUES ('38', '你们', '一定要', '问我', '滋瓷', '不', '滋瓷', '我是', '滋瓷');
INSERT INTO `et_data` VALUES ('39', '你们', '有一个', '好', '就是', '遇到问题', '跑得比', '西方记者', '还快');
INSERT INTO `et_data` VALUES ('40', '但是', '问来问去', '的问题', '呀！', 'too', 'simple！', 'sometimes', 'naive！');
