// character attributes
const heights = [150, 190];
const types = ['优等生', '魔法少女', '战术人型', '舰娘', '杀人狂', '眼镜娘', '魔物娘', '不幸少女', '老师', '学生会长', '杀手', '贵族', '青梅竹马', '破鞋', '文学少女', '大小姐', '特工', '姐姐', '圣女', '巫女', '学生', '碧池', '中二少女', '人妻', '辣妹', '军人', '赛马娘', '天使', '恶魔', '音乐少女'];
const natures = ['悲观', '病弱', '大和抚子', '傲娇', '病娇', '高傲', '三无', '乐观', '强气', '弱气', '元气', '运动达人', '高岭之花', '认真', '腹黑', '笨蛋', '女王', '天然呆', '冒失', '电波', '拜金', '抖S', '御姐', '闷骚', '宅女', '社恐', '社交达人', '抖M'];
const skins = ['黑皮', '洁白', '正常', '小麦色'];
const hairs = ['大波浪', '蛋卷头', '波波头', '羊毛卷', '法式卷', '齐耳发', '齐肩发', '齐臀发', '公主辩', '双马尾', '低马尾', '高马尾', '双钻头(螺旋式)', '姬式发', '包子头', '麻花辫'];
const colors = ['洁白', '灰白', '透白', '赤红', '粉红', '亮红', '天蓝', '海蓝', '蓝色', '绿色', '紫色', '橙色', '黑色', '棕色', '褐色', '橘色', '深绿', '浅绿', '深紫', '黄色', '深黑', '银色', '金色', '红色', '肉色'];
const cups = ['AA', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

// import {heights} from "./character_attributes.js";

function rand(min, max) {
    // generate a random integer in [min, max)
    return parseInt(min + Math.random() * (max - min));
}

function generate() {
    // generate random charactor attributes
    // alert("hello world")
    var results = document.getElementById("results");
    var btn = document.getElementById("btn");
    var height = document.getElementById("height");
    var type = document.getElementById("type");
    var nature = document.getElementById("nature");
    var skin = document.getElementById("skin");
    var hair = document.getElementById("hair");
    var color_hair = document.getElementById("color_hair");
    var color_eyes = document.getElementById("color_eyes");
    var cup = document.getElementById("cup");

    if (results.style.display == "none") {
        results.style.display = "";
    }

    height.innerHTML = rand(heights[0], heights[1]);
    type.innerHTML = types[rand(0, types.length)];
    nature.innerHTML = natures[rand(0, natures.length)];
    skin.innerHTML = skins[rand(0, skins.length)];
    hair.innerHTML = hairs[rand(0, hairs.length)];
    color_hair.innerHTML = colors[rand(0, colors.length)];
    color_eyes.innerHTML = colors[rand(0, colors.length)];
    cup.innerHTML = cups[rand(0, cups.length)];
}
