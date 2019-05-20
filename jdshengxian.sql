/*
Navicat MySQL Data Transfer

Source Server         : xzsql
Source Server Version : 50709
Source Host           : localhost:3306
Source Database       : jdshengxian

Target Server Type    : MYSQL
Target Server Version : 50709
File Encoding         : 65001

Date: 2019-05-20 11:32:52
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for gooodslist
-- ----------------------------
DROP TABLE IF EXISTS `gooodslist`;
CREATE TABLE `gooodslist` (
  `gid` varchar(255) NOT NULL,
  `shopid` varchar(255) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `describei` varchar(255) DEFAULT NULL,
  `bigimg` varchar(255) DEFAULT NULL,
  `smalling` varchar(255) DEFAULT NULL,
  `brand` varchar(255) DEFAULT NULL,
  `assess` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of gooodslist
-- ----------------------------
INSERT INTO `gooodslist` VALUES ('1', '001', '水果京东自营专区', '39', '京东海外直采 泰国冷冻榴莲（无核） 250g盒装 原装进口 ', 'img/zzwan_1.jpg', 'img/zzwan_1.jpg&img/zzwan_1_1.jpg&img/zzwan_1_2.jpg&img/zzwan_1_3.jpg&img/zzwan_1_4.jpg&img/zzwan_1_5.jpg', '泰国莲', '256', '250g');
INSERT INTO `gooodslist` VALUES ('2', '001', '水果京东自营专区', '87', '大连美早樱桃/车厘子500g J级 果径约26-28mm 新鲜水果 ', 'img/zzwan_2.jpg', 'img/zzwan_2.jpg&img/zzwan_2_1.jpg&img/zzwan_2_2.jpg', '樱桃', '565', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('3', '003', '美国新奇士', '135', '新奇士Sunkist 进口美人柑 12个装 单果重约110-140g 新鲜水果 ', 'img/zzwan_3.jpg', 'img/zzwan_3.jpg&img/zzwan_3_1.jpg&img/zzwan_3_2.jpg', '凳子', '552', '250kg');
INSERT INTO `gooodslist` VALUES ('4', '004', '游鲜生官方旗舰店', '183', '【游鲜生 顺丰空运】美早大樱桃非进口车厘子 京东水果生鲜 2斤装     ', 'img/zzwan_4.png', 'img/zzwan_4.png&img/zzwan_4_1.jpg&img/zzwan_4_2.jpg', '樱桃', '555', '250g');
INSERT INTO `gooodslist` VALUES ('5', '005', '领先生鲜旗舰店', '231', '【两份减10】领鲜未来 智利进口冷冻三文鱼刺身（大西洋鲑）500g 生鱼段 ', 'img/zzwan_5.jpg', 'img/zzwan_5.jpg&img/zzwan_5_1.jpg&img/zzwan_5_2.jpg', '生鲜', '441', '251g');
INSERT INTO `gooodslist` VALUES ('6', '006', '水果店', '279', '新西兰进口有机Bostock苹果 8个装 单果约130-170g 新鲜水果                ', 'img/zzwan_6.jpg', 'img/zzwan_6.jpg&img/zzwan_6_1.jpg&img/zzwan_6_2.jpg', '海参', '141', '1kg&3kg&6kg');
INSERT INTO `gooodslist` VALUES ('7', '007', '蒙都东', '327', '蒙都 秘密小牛肉 筋头巴脑 熟食 1kg/盒 香辣味 ', 'img/zzwan_7.jpg', 'img/zzwan_7.jpg&img/zzwan_7_1.jpg&img/zzwan_7_2.jpg', '羊肉肉类', '7744', '251kg');
INSERT INTO `gooodslist` VALUES ('8', '008', '喜御京东', '375', '喜玉 有机即食海参 500g 10-15只 袋装 野生大连刺参 ', 'img/zzwan_8.jpg', 'img/zzwan_8.jpg&img/zzwan_8_1.jpg&img/zzwan_8_2.jpg', '海参', '565', '251g');
INSERT INTO `gooodslist` VALUES ('9', '009', '保生堂生鲜旗舰店', '423', '宝身堂 即食海参 200g 5-7只 大连冷冻即食海参 海鲜水产 ', 'img/zzwan_9.jpg', 'img/zzwan_9.jpg&img/zzwan_9_1.jpg&img/zzwan_9_2.jpg', '橙子', '555', '252g');
INSERT INTO `gooodslist` VALUES ('10', '010', '鲜揽果', '471', '鲜菓篮 青见柑橘非丑橘不知火 10斤钻石果装 京东生鲜新鲜水果 ', 'img/zzwan_10.png', 'img/zzwan_10.png&img/zzwan_10_1.jpg&img/zzwan_10_2.jpg', '龙虾', '45552', '麻辣味&十三味');
INSERT INTO `gooodslist` VALUES ('11', '011', '江苏管', '519', '【江苏馆】正宗盱眙龙虾 1500g/盒 江苏特产 小龙虾 十三香味 4-6钱/只 ', 'img/zzwan_11.jpg', 'img/zzwan_11.jpg&img/zzwan_11_1.jpg&img/zzwan_11_2.jpg', '龙虾', '745', '252kg');
INSERT INTO `gooodslist` VALUES ('12', '012', '偷果', '567', ' 顺丰空运 现摘红颜巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜                ', 'img/zzwan_12.jpg', 'img/zzwan_12.jpg&img/zzwan_12_1.jpg&img/zzwan_12_2.jpg', '偷果', '63', '252g');
INSERT INTO `gooodslist` VALUES ('13', '013', '神当官旗舰店', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', 'img/zzwan_13.jpg', 'img/zzwan_13.jpg&img/zzwan_13_1.jpg&img/zzwan_13_2.jpg', '咸蛋', '53', '253g');
INSERT INTO `gooodslist` VALUES ('14', '014', '邻家小厨', '663', '邻家小厨壹点心 水晶虾饺1000g（50个）广式港式早茶点心 速冻饺子 手工蒸饺 ', 'img/zzwan_14.jpg', 'img/zzwan_14.jpg&img/zzwan_14_1.jpg&img/zzwan_14_2.jpg', '包子', '56436', '1kg&3kg&8kg');
INSERT INTO `gooodslist` VALUES ('15', '015', '王家度京', '711', '王家渡 午餐肉肠黑胡椒味 320g/根 方便速食 即食火腿 居家旅行必备 早餐火锅烧烤食材 ', 'img/zzwan_15.jpg', 'img/zzwan_15.jpg&img/zzwan_15_1.jpg&img/zzwan_15_2.jpg', '火腿', '654', '253kg');
INSERT INTO `gooodslist` VALUES ('16', '010', '雄风饰品店', '17', '雄丰仿蟹王棒500g包装火锅料麻辣烫关东煮蟹柳冷冻食品鱼糜肉制品 ', 'img/pic1.jpg', 'img/pic1_1.jpg&img/pic1_2.img', '火锅底料', '342', '253g');
INSERT INTO `gooodslist` VALUES ('17', '001', '水果京东自营专区', '70', '海南妃子笑荔枝 2.5kg家庭装 新鲜水果 ', 'img/lizhi_1.jpg', 'img/lizhi_1_1.jpg&img/lizhi_1_2.jpg&img/lizhi_1_3.jpg&img/lizhi_1_4.jpg&img/lizhi_1_5.jpg&img/lizhi_1_6.jpg', '荔枝', '2255', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('18', '001', '水果京东自营专区', '30', '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果 ', 'img/putu_1.jpg', 'img/putao_1_1.jpg&img/putao_1_2.jpg', '葡萄', '5521', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('19', '001', '水果京东自营专区', '37', '海南小台农芒果 1.5kg装 单果50g以上 新鲜水果 ', 'img/mangguo_1.jpg', 'img/mangguo_1_1.jpg&img/mangguo_1_2.jpg', '芒果', '55', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('20', '014', '正大食品', '27', 'CP正大 川香鸡柳 400g 香酥鸡柳油炸鸡柳油炸鸡排 休闲食品油炸食品 早餐食品速冻半成品手抓饼伴侣 ', 'img/pic2.jpg', 'img/pic2_1.jpg&img/pic2_2.jpg', '正大食品', '', '');
INSERT INTO `gooodslist` VALUES ('21', '015', '和雪琪', '43', '和路雪 梦龙 Double 双重脆层流心酱红覆盆子口味 冰淇淋家庭装 216g 雪糕 ', 'img/pic3.jpg', 'img/pic3_1.jpg&img/pic3_2.jpg', '正大食品', '', '');
INSERT INTO `gooodslist` VALUES ('22', '001', '水果京东自营专区', '39', '京东海外直采 泰国冷冻榴莲（无核） 250g盒装 原装进口 ', 'img/zzwan_1.jpg', 'img/zzwan_1_1.jpg&img/zzwan_1_2.jpg&img/zzwan_1_3.jpg&img/zzwan_1_4.jpg&img/zzwan_1_5.jpg', '泰国莲', '256', '250g');
INSERT INTO `gooodslist` VALUES ('23', '001', '水果京东自营专区', '87', '大连美早樱桃/车厘子500g J级 果径约26-28mm 新鲜水果 ', 'img/zzwan_2.jpg', 'img/zzwan_2_1.jpg&img/zzwan_2_2.jpg', '樱桃', '565', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('24', '003', '美国新奇士', '135', '新奇士Sunkist 进口美人柑 12个装 单果重约110-140g 新鲜水果 ', 'img/zzwan_3.jpg', 'img/zzwan_3_1.jpg&img/zzwan_3_2.jpg', '凳子', '552', '250kg');
INSERT INTO `gooodslist` VALUES ('25', '004', '游鲜生官方旗舰店', '183', '【游鲜生 顺丰空运】美早大樱桃非进口车厘子 京东水果生鲜 2斤装     ', 'img/zzwan_4.png', 'img/zzwan_4_1.jpg&img/zzwan_4_2.jpg', '樱桃', '555', '250g');
INSERT INTO `gooodslist` VALUES ('26', '005', '领先生鲜旗舰店', '231', '【两份减10】领鲜未来 智利进口冷冻三文鱼刺身（大西洋鲑）500g 生鱼段 ', 'img/zzwan_5.jpg', 'img/zzwan_5_1.jpg&img/zzwan_5_2.jpg', '生鲜', '441', '251g');
INSERT INTO `gooodslist` VALUES ('27', '006', '水果店', '279', '新西兰进口有机Bostock苹果 8个装 单果约130-170g 新鲜水果                ', 'img/zzwan_6.jpg', 'img/zzwan_6_1.jpg&img/zzwan_6_2.jpg', '海参', '141', '1kg&3kg&6kg');
INSERT INTO `gooodslist` VALUES ('28', '007', '蒙都东', '327', '蒙都 秘密小牛肉 筋头巴脑 熟食 1kg/盒 香辣味 ', 'img/zzwan_7.jpg', 'img/zzwan_7_1.jpg&img/zzwan_7_2.jpg', '羊肉肉类', '7744', '251kg');
INSERT INTO `gooodslist` VALUES ('29', '008', '喜御京东', '375', '喜玉 有机即食海参 500g 10-15只 袋装 野生大连刺参 ', 'img/zzwan_8.jpg', 'img/zzwan_8_1.jpg&img/zzwan_8_2.jpg', '海参', '565', '251g');
INSERT INTO `gooodslist` VALUES ('30', '009', '保生堂生鲜旗舰店', '423', '宝身堂 即食海参 200g 5-7只 大连冷冻即食海参 海鲜水产 ', 'img/zzwan_9.jpg', 'img/zzwan_9_1.jpg&img/zzwan_9_2.jpg', '橙子', '555', '252g');
INSERT INTO `gooodslist` VALUES ('31', '010', '鲜揽果', '471', '鲜菓篮 青见柑橘非丑橘不知火 10斤钻石果装 京东生鲜新鲜水果 ', 'img/zzwan_10.png', 'img/zzwan_10_1.jpg&img/zzwan_10_2.jpg', '龙虾', '45552', '麻辣味&十三味');
INSERT INTO `gooodslist` VALUES ('32', '011', '江苏管', '519', '【江苏馆】正宗盱眙龙虾 1500g/盒 江苏特产 小龙虾 十三香味 4-6钱/只 ', 'img/zzwan_11.jpg', 'img/zzwan_11_1.jpg&img/zzwan_11_2.jpg', '龙虾', '745', '252kg');
INSERT INTO `gooodslist` VALUES ('33', '012', '偷果', '567', ' 顺丰空运 现摘红颜巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜                ', 'img/zzwan_12.jpg', 'img/zzwan_12_1.jpg&img/zzwan_12_2.jpg', '偷果', '63', '252g');
INSERT INTO `gooodslist` VALUES ('34', '013', '神当官旗舰店', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', 'img/zzwan_13.jpg', 'img/zzwan_13_1.jpg&img/zzwan_13_2.jpg', '咸蛋', '53', '253g');
INSERT INTO `gooodslist` VALUES ('35', '014', '邻家小厨', '663', '邻家小厨壹点心 水晶虾饺1000g（50个）广式港式早茶点心 速冻饺子 手工蒸饺 ', 'img/zzwan_14.jpg', 'img/zzwan_14_1.jpg&img/zzwan_14_2.jpg', '包子', '56436', '1kg&3kg&8kg');
INSERT INTO `gooodslist` VALUES ('36', '015', '王家度京', '711', '王家渡 午餐肉肠黑胡椒味 320g/根 方便速食 即食火腿 居家旅行必备 早餐火锅烧烤食材 ', 'img/zzwan_15.jpg', 'img/zzwan_15_1.jpg&img/zzwan_15_2.jpg', '火腿', '654', '253kg');
INSERT INTO `gooodslist` VALUES ('37', '010', '雄风饰品店', '17', '雄丰仿蟹王棒500g包装火锅料麻辣烫关东煮蟹柳冷冻食品鱼糜肉制品 ', 'img/pic1.jpg', 'img/pic1_1.jpg&img/pic1_2.img', '火锅底料', '342', '253g');
INSERT INTO `gooodslist` VALUES ('38', '001', '水果京东自营专区', '70', '海南妃子笑荔枝 2.5kg家庭装 新鲜水果 ', 'img/lizhi_1.jpg', 'img/lizhi_1_1.jpg&img/lizhi_1_2.jpg&img/lizhi_1_3.jpg&img/lizhi_1_4.jpg&img/lizhi_1_5.jpg&img/lizhi_1_6.jpg', '荔枝', '2255', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('39', '001', '水果京东自营专区', '30', '澳洲 进口无籽红提/葡萄 提子 450g装 新鲜水果 ', 'img/putu_1.jpg', 'img/putao_1_1.jpg&img/putao_1_2.jpg', '葡萄', '5521', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('40', '001', '水果京东自营专区', '37', '海南小台农芒果 1.5kg装 单果50g以上 新鲜水果 ', 'img/mangguo_1.jpg', 'img/mangguo_1_1.jpg&img/mangguo_1_2.jpg', '芒果', '55', '1kg&3kg&5kg');
INSERT INTO `gooodslist` VALUES ('41', '006', '水果店', '279', '新西兰进口有机Bostock苹果 8个装 单果约130-170g 新鲜水果                ', 'img/zzwan_6.jpg', 'img/zzwan_6_1.jpg&img/zzwan_6_2.jpg', '海参', '141', '1kg&3kg&6kg');
INSERT INTO `gooodslist` VALUES ('42', '007', '蒙都东', '327', '蒙都 秘密小牛肉 筋头巴脑 熟食 1kg/盒 香辣味 ', 'img/zzwan_7.jpg', 'img/zzwan_7_1.jpg&img/zzwan_7_2.jpg', '羊肉', '7744', '251kg');
INSERT INTO `gooodslist` VALUES ('43', '008', '喜御京东', '375', '喜玉 有机即食海参 500g 10-15只 袋装 野生大连刺参 ', 'img/zzwan_8.jpg', 'img/zzwan_8_1.jpg&img/zzwan_8_2.jpg', '海参', '565', '251g');
INSERT INTO `gooodslist` VALUES ('44', '009', '保生堂生鲜旗舰店', '423', '宝身堂 即食海参 200g 5-7只 大连冷冻即食海参 海鲜水产 ', 'img/zzwan_9.jpg', 'img/zzwan_9_1.jpg&img/zzwan_9_2.jpg', '橙子', '555', '252g');
INSERT INTO `gooodslist` VALUES ('45', '010', '鲜揽果', '471', '鲜菓篮 青见柑橘非丑橘不知火 10斤钻石果装 京东生鲜新鲜水果 ', 'img/zzwan_10.png', 'img/zzwan_10_1.jpg&img/zzwan_10_2.jpg', '龙虾', '45552', '麻辣味&十三味');
INSERT INTO `gooodslist` VALUES ('46', '011', '江苏管', '519', '【江苏馆】正宗盱眙龙虾 1500g/盒 江苏特产 小龙虾 十三香味 4-6钱/只 ', 'img/zzwan_11.jpg', 'img/zzwan_11_1.jpg&img/zzwan_11_2.jpg', '龙虾肉类', '745', '252kg');
INSERT INTO `gooodslist` VALUES ('47', '012', '偷果', '567', ' 顺丰空运 现摘红颜巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜                ', 'img/zzwan_12.jpg', 'img/zzwan_12_1.jpg&img/zzwan_12_2.jpg', '偷果', '63', '252g');
INSERT INTO `gooodslist` VALUES ('48', '013', '神当官旗舰店', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', 'img/zzwan_13.jpg', 'img/zzwan_13_1.jpg&img/zzwan_13_2.jpg', '咸蛋', '53', '253g');
INSERT INTO `gooodslist` VALUES ('49', '014', '邻家小厨', '663', '邻家小厨壹点心 水晶虾饺1000g（50个）广式港式早茶点心 速冻饺子 手工蒸饺 ', 'img/zzwan_14.jpg', 'img/zzwan_14_1.jpg&img/zzwan_14_2.jpg', '包子', '56436', '1kg&3kg&8kg');
INSERT INTO `gooodslist` VALUES ('50', '015', '王家度京', '711', '王家渡 午餐肉肠黑胡椒味 320g/根 方便速食 即食火腿 居家旅行必备 早餐火锅烧烤食材 ', 'img/zzwan_15.jpg', 'img/zzwan_15_1.jpg&img/zzwan_15_2.jpg', '火腿', '654', '253kg');
INSERT INTO `gooodslist` VALUES ('51', '010', '雄风饰品店', '17', '雄丰仿蟹王棒500g包装火锅料麻辣烫关东煮蟹柳冷冻食品鱼糜肉制品 ', 'img/pic1.jpg', 'img/pic1_1.jpg&img/pic1_2.img', '火锅底料', '342', '253g');
INSERT INTO `gooodslist` VALUES ('52', '006', '水果店', '279', '新西兰进口有机Bostock苹果 8个装 单果约130-170g 新鲜水果                ', 'img/zzwan_6.jpg', 'img/zzwan_6_1.jpg&img/zzwan_6_2.jpg', '海参', '141', '1kg&3kg&6kg');
INSERT INTO `gooodslist` VALUES ('53', '007', '蒙都东', '327', '蒙都 秘密小牛肉 筋头巴脑 熟食 1kg/盒 香辣味 ', 'img/zzwan_7.jpg', 'img/zzwan_7_1.jpg&img/zzwan_7_2.jpg', '羊肉', '7744', '251kg');
INSERT INTO `gooodslist` VALUES ('54', '008', '喜御京东', '375', '喜玉 有机即食海参 500g 10-15只 袋装 野生大连刺参 ', 'img/zzwan_8.jpg', 'img/zzwan_8_1.jpg&img/zzwan_8_2.jpg', '海参', '565', '251g');
INSERT INTO `gooodslist` VALUES ('55', '009', '保生堂生鲜旗舰店', '423', '宝身堂 即食海参 200g 5-7只 大连冷冻即食海参 海鲜水产 ', 'img/zzwan_9.jpg', 'img/zzwan_9_1.jpg&img/zzwan_9_2.jpg', '橙子', '555', '252g');
INSERT INTO `gooodslist` VALUES ('56', '010', '鲜揽果', '471', '鲜菓篮 青见柑橘非丑橘不知火 10斤钻石果装 京东生鲜新鲜水果 ', 'img/zzwan_10.png', 'img/zzwan_10_1.jpg&img/zzwan_10_2.jpg', '龙虾', '45552', '麻辣味&十三味');
INSERT INTO `gooodslist` VALUES ('57', '011', '江苏管', '519', '【江苏馆】正宗盱眙龙虾 1500g/盒 江苏特产 小龙虾 十三香味 4-6钱/只 ', 'img/zzwan_11.jpg', 'img/zzwan_11_1.jpg&img/zzwan_11_2.jpg', '龙虾', '745', '252kg');
INSERT INTO `gooodslist` VALUES ('58', '012', '偷果', '567', ' 顺丰空运 现摘红颜巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜                ', 'img/zzwan_12.jpg', 'img/zzwan_12_1.jpg&img/zzwan_12_2.jpg', '偷果', '63', '252g');
INSERT INTO `gooodslist` VALUES ('59', '013', '神当官旗舰店', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', 'img/zzwan_13.jpg', 'img/zzwan_13_1.jpg&img/zzwan_13_2.jpg', '咸蛋', '53', '253g');
INSERT INTO `gooodslist` VALUES ('60', '014', '邻家小厨', '663', '邻家小厨壹点心 水晶虾饺1000g（50个）广式港式早茶点心 速冻饺子 手工蒸饺 ', 'img/zzwan_14.jpg', 'img/zzwan_14_1.jpg&img/zzwan_14_2.jpg', '包子', '56436', '1kg&3kg&8kg');
INSERT INTO `gooodslist` VALUES ('61', '007', '蒙都东', '327', '蒙都 秘密小牛肉 筋头巴脑 熟食 1kg/盒 香辣味 ', 'img/zzwan_7.jpg', 'img/zzwan_7_1.jpg&img/zzwan_7_2.jpg', '羊肉', '7744', '251kg');
INSERT INTO `gooodslist` VALUES ('62', '008', '喜御京东', '375', '喜玉 有机即食海参 500g 10-15只 袋装 野生大连刺参 ', 'img/zzwan_8.jpg', 'img/zzwan_8_1.jpg&img/zzwan_8_2.jpg', '海参', '565', '251g');
INSERT INTO `gooodslist` VALUES ('63', '009', '保生堂生鲜旗舰店', '423', '宝身堂 即食海参 200g 5-7只 大连冷冻即食海参 海鲜水产 ', 'img/zzwan_9.jpg', 'img/zzwan_9_1.jpg&img/zzwan_9_2.jpg', '橙子', '555', '252g');
INSERT INTO `gooodslist` VALUES ('64', '010', '鲜揽果', '471', '鲜菓篮 青见柑橘非丑橘不知火 10斤钻石果装 京东生鲜新鲜水果 ', 'img/zzwan_10.png', 'img/zzwan_10_1.jpg&img/zzwan_10_2.jpg', '龙虾', '45552', '麻辣味&十三味');
INSERT INTO `gooodslist` VALUES ('65', '011', '江苏管', '519', '【江苏馆】正宗盱眙龙虾 1500g/盒 江苏特产 小龙虾 十三香味 4-6钱/只 ', 'img/zzwan_11.jpg', 'img/zzwan_11_1.jpg&img/zzwan_11_2.jpg', '龙虾', '745', '252kg');
INSERT INTO `gooodslist` VALUES ('66', '012', '偷果', '567', ' 顺丰空运 现摘红颜巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜                ', 'img/zzwan_12.jpg', 'img/zzwan_12_1.jpg&img/zzwan_12_2.jpg', '偷果', '63', '252g');
INSERT INTO `gooodslist` VALUES ('67', '013', '神当官旗舰店', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', 'img/zzwan_13.jpg', 'img/zzwan_13_1.jpg&img/zzwan_13_2.jpg', '咸蛋', '53', '253g');
INSERT INTO `gooodslist` VALUES ('68', '014', '邻家小厨', '663', '邻家小厨壹点心 水晶虾饺1000g（50个）广式港式早茶点心 速冻饺子 手工蒸饺 ', 'img/zzwan_14.jpg', 'img/zzwan_14_1.jpg&img/zzwan_14_2.jpg', '包子', '56436', '1kg&3kg&8kg');
INSERT INTO `gooodslist` VALUES ('69', '015', '王家度京', '711', '王家渡 午餐肉肠黑胡椒味 320g/根 方便速食 即食火腿 居家旅行必备 早餐火锅烧烤食材 ', 'img/zzwan_15.jpg', 'img/zzwan_15_1.jpg&img/zzwan_15_2.jpg', '火腿', '654', '253kg');
INSERT INTO `gooodslist` VALUES ('70', '010', '雄风饰品店', '17', '雄丰仿蟹王棒500g包装火锅料麻辣烫关东煮蟹柳冷冻食品鱼糜肉制品 ', 'img/pic1.jpg', 'img/pic1_1.jpg&img/pic1_2.img', '火锅底料', '342', '253g');
INSERT INTO `gooodslist` VALUES ('71', '006', '水果店', '279', '新西兰进口有机Bostock苹果 8个装 单果约130-170g 新鲜水果                ', 'img/zzwan_6.jpg', 'img/zzwan_6_1.jpg&img/zzwan_6_2.jpg', '海参', '141', '1kg&3kg&6kg');
INSERT INTO `gooodslist` VALUES ('72', '007', '蒙都东', '327', '蒙都 秘密小牛肉 筋头巴脑 熟食 1kg/盒 香辣味 ', 'img/zzwan_7.jpg', 'img/zzwan_7_1.jpg&img/zzwan_7_2.jpg', '羊肉', '7744', '251kg');
INSERT INTO `gooodslist` VALUES ('73', '008', '喜御京东', '375', '喜玉 有机即食海参 500g 10-15只 袋装 野生大连刺参 ', 'img/zzwan_8.jpg', 'img/zzwan_8_1.jpg&img/zzwan_8_2.jpg', '海参', '565', '251g');
INSERT INTO `gooodslist` VALUES ('74', '009', '保生堂生鲜旗舰店', '423', '宝身堂 即食海参 200g 5-7只 大连冷冻即食海参 海鲜水产 ', 'img/zzwan_9.jpg', 'img/zzwan_9_1.jpg&img/zzwan_9_2.jpg', '橙子', '555', '252g');
INSERT INTO `gooodslist` VALUES ('75', '010', '鲜揽果', '471', '鲜菓篮 青见柑橘非丑橘不知火 10斤钻石果装 京东生鲜新鲜水果 ', 'img/zzwan_10.png', 'img/zzwan_10_1.jpg&img/zzwan_10_2.jpg', '龙虾', '45552', '麻辣味&十三味');
INSERT INTO `gooodslist` VALUES ('76', '011', '江苏管', '519', '【江苏馆】正宗盱眙龙虾 1500g/盒 江苏特产 小龙虾 十三香味 4-6钱/只 ', 'img/zzwan_11.jpg', 'img/zzwan_11_1.jpg&img/zzwan_11_2.jpg', '龙虾', '745', '252kg');
INSERT INTO `gooodslist` VALUES ('77', '012', '偷果', '567', ' 顺丰空运 现摘红颜巧克力奶油草莓3斤装 新鲜水果礼盒 京东生鲜                ', 'img/zzwan_12.jpg', 'img/zzwan_12_1.jpg&img/zzwan_12_2.jpg', '偷果', '63', '252g');
INSERT INTO `gooodslist` VALUES ('78', '013', '神当官旗舰店', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', 'img/zzwan_13.jpg', 'img/zzwan_13_1.jpg&img/zzwan_13_2.jpg', '咸蛋', '53', '253g');
INSERT INTO `gooodslist` VALUES ('79', '014', '邻家小厨', '663', '邻家小厨壹点心 水晶虾饺1000g（50个）广式港式早茶点心 速冻饺子 手工蒸饺 ', 'img/zzwan_14.jpg', 'img/zzwan_14_1.jpg&img/zzwan_14_2.jpg', '包子', '56436', '1kg&3kg&8kg');
INSERT INTO `gooodslist` VALUES ('80', '013', '神当官旗舰店', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', 'img/zzwan_13.jpg', 'img/zzwan_13_1.jpg&img/zzwan_13_2.jpg', '邻家', '555', '');
INSERT INTO `gooodslist` VALUES ('81', '014', '邻家小厨', '663', '邻家小厨壹点心 水晶虾饺1000g（50个）广式港式早茶点心 速冻饺子 手工蒸饺 ', 'img/zzwan_14.jpg', 'img/zzwan_14_1.jpg&img/zzwan_14_2.jpg', '邻家', '55', '');

-- ----------------------------
-- Table structure for shoppinglist
-- ----------------------------
DROP TABLE IF EXISTS `shoppinglist`;
CREATE TABLE `shoppinglist` (
  `usernames` varchar(11) DEFAULT NULL,
  `gid` int(11) DEFAULT NULL,
  `inventory` int(255) DEFAULT NULL,
  `num` int(11) DEFAULT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `bigimg` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `describei` varchar(255) DEFAULT NULL,
  `shopname` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shoppinglist
-- ----------------------------
INSERT INTO `shoppinglist` VALUES ('18316489175', '4', '1000', '1', '2019-05-19 14:01:18', 'img/zzwan_4.png', '183', '【游鲜生 顺丰空运】美早大樱桃非进口车厘子 京东水果生鲜 2斤装     ', '游鲜生官方旗舰店', '250g');
INSERT INTO `shoppinglist` VALUES ('18316489175', '1', '1001', '1', '2019-05-19 14:01:22', 'img/zzwan_1.jpg', '39', '京东海外直采 泰国冷冻榴莲（无核） 250g盒装 原装进口 ', '水果京东自营专区', '250g');
INSERT INTO `shoppinglist` VALUES ('18316489175', '5', '1002', '1', '2019-05-19 14:01:24', 'img/zzwan_5.jpg', '231', '【两份减10】领鲜未来 智利进口冷冻三文鱼刺身（大西洋鲑）500g 生鱼段 ', '领先生鲜旗舰店', '251g');
INSERT INTO `shoppinglist` VALUES ('18316489175', '2', '1003', '4', '2019-05-19 14:01:27', 'img/zzwan_2.jpg', '87', '大连美早樱桃/车厘子500g J级 果径约26-28mm 新鲜水果 ', '水果京东自营专区', '3kg');
INSERT INTO `shoppinglist` VALUES ('18316489175', '3', '1004', '5', '2019-05-19 14:01:30', 'img/zzwan_3.jpg', '135', '新奇士Sunkist 进口美人柑 12个装 单果重约110-140g 新鲜水果 ', '美国新奇士', '250kg');
INSERT INTO `shoppinglist` VALUES ('15113614882', '3', '100', '3', '2019-05-20 09:09:45', 'img/zzwan_3.jpg', '135', '新奇士Sunkist 进口美人柑 12个装 单果重约110-140g 新鲜水果 ', '美国新奇士', '250kg');
INSERT INTO `shoppinglist` VALUES ('18316489175', '13', '1005', '5', '2019-05-19 14:01:34', 'img/zzwan_13.jpg', '615', '神丹 洞庭湖熟咸蛋 咸鸭蛋真空包装 20枚 1kg ', '神当官旗舰店', '253g');

-- ----------------------------
-- Table structure for userinf
-- ----------------------------
DROP TABLE IF EXISTS `userinf`;
CREATE TABLE `userinf` (
  `uid` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `passwords` varchar(255) NOT NULL,
  `regtime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userinf
-- ----------------------------
INSERT INTO `userinf` VALUES ('1', '25', '5', '2019-05-16 15:57:27');
INSERT INTO `userinf` VALUES ('2', '123456', '123456', '2019-05-16 15:58:08');
INSERT INTO `userinf` VALUES ('3', '18316489175', '123456789', '2019-05-16 16:05:57');
INSERT INTO `userinf` VALUES ('4', '15113614882', '123456789', '2019-05-16 16:07:58');
SET FOREIGN_KEY_CHECKS=1;
