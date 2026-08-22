PennController.ResetPrefix(null)

_AddStandardCommands(function(PennEngine){
    this.test = {
        passed: function(){
            return !PennEngine.controllers.running.utils.valuesForNextElement ||
                   !PennEngine.controllers.running.utils.valuesForNextElement.failed;
        }
    };
});

// practice: 16 trials

newTrial('p_Group_1_Condition_1_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '医生说，小菲得多吃点水果。爸爸说，记住了，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '前阵子, 小菲 很 爱吃 香蕉, 我们 给她 多买点。', a: 'x-x-x 世纪 个 定局 烟火, x-x-x 菱形 消防栓。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '医生建议小菲多吃水果。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '1');

newTrial('p_Group_1_Condition_4_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小美说，我打算送只小猫给张华。琪琪说，好主意，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张华啊, 小猫 很 喜欢 来着, 不过 他 买不起。', a: 'x-x-x 是吗 蜘 乘法 与其, x-x-x 着 逆命题。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小美打算送衬衫给张华。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '2');

newTrial('p_Group_1_Condition_3_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈说，我打算送小刚学外语。爸爸说，好主意，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '外语嘛, 小刚 很 想学 法语 但是 没人 教。', a: 'x-x-x 蒙蒙 条 完事 咩咩, x-x-x 比喻 七。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸很支持妈妈。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '3');

newTrial('p_Group_1_Condition_2_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小高说，大卫马上去上海出差。小华说，真的呀，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '上海呢, 大卫 没 来过 倒是, 一直 没 机会。', a: 'x-x-x 不了 件 没错 耳蜗, x-x-x 炖 拟人。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '大卫准备中国出差。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '4');

newTrial('p_Group_1_Condition_1_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '芬芬妈说，今天超市海鲜很便宜。爸爸说，太好啦，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '前阵子, 芬芬 很 爱吃 大虾, 可以 多买点。', a: 'x-x-x 之时 块 得令 咕叽, x-x-x 双曲线。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '今天超市蔬菜很便宜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '5');

newTrial('p_Group_1_Condition_4_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师说，李洁很有芭蕾天赋。妈妈说，真的嘛，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '李洁呀, 芭蕾 很 喜欢 来着, 应该 着重 培养。', a: 'x-x-x 对的 根 成败 憎恨, x-x-x 啤酒 奶油。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李洁没有舞蹈天赋。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '6');

newTrial('p_Group_1_Condition_3_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '导师说，你和小李多上点选修课吧。小彭说，可以的，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '选修课, 小李 很 想学 编程, 我们 一起选。', a: 'x-x-x 极了 颗 法令 哼唧, x-x-x 含羞草。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '导师让学生多上些课。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '7');

newTrial('p_Group_1_Condition_2_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '医生说，王华是不是很爱喝可乐？妈妈说，确实是，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '可乐啊, 王华 很 爱喝 来着, 难怪 长胖 十斤。', a: 'x-x-x 而且 粒 作罢 呕吐, x-x-x 师傅 法师。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '王华很爱喝汽水。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '8');

newTrial('p_Group_1_Condition_5_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小李说，公司要进行薪酬改革了。小王说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我 怀疑 经理  能 挣到 三十万, 公司 会降薪。', a: 'x-x-x 然而 茫茫 哈 表面 回不到, x-x-x 每一页。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '经理一定能挣到三十万。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '9');

newTrial('p_Group_1_Condition_5_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '总监说，我们需要关注一下公司人事变动。张总说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我 不信 小汪 会 离职, 小汪 很忠诚。', a: 'x-x-x 依依 对焦 呢 红豆, x-x-x 调色板。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小汪一定会离职。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '10');

newTrial('p_Group_1_Condition_5_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '组长说，马上要开员工考核会了。张强说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小陈  不会 通过 试用期, 小陈 绩效差。', a: 'x-x-x 乃至 芳菲 转圈圈, x-x-x 半导体。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小陈肯定会通过试用期。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '11');

newTrial('p_Group_1_Condition_5_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '王秘书说，请大家提交一下年终总结。小李说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '公司 年底 不发 年终奖, 今年 效益差。', a: 'x-x-x 之际 即或 好无聊, x-x-x 西红柿。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '公司年底发不上年终奖。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '12');

newTrial('p_Group_1_Condition_5_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '学习委员说，离交卷还有半小时。老师说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我 不信 大家 能写完, 题目 量太大。', a: 'x-x-x 清脆 之类 新干线, x-x-x 会刹车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '大家今天肯定能写完这些题。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '13');

newTrial('p_Group_1_Condition_5_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '王老师说，附加题是拉开分数的关键。刘老师说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 能 答对 附加题, 题目 不算难。', a: 'x-x-x 哇 念头 听老歌, x-x-x 看星星。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明答不上附加题。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '14');

newTrial('p_Group_1_Condition_5_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '同事说，方案进展还不错吧。领导说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '方案 会 提交 董事会, 方案 很重要。', a: 'x-x-x 呗 蓝色 说说笑, x-x-x 圆舞曲。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '方案进展不太好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '15');

newTrial('p_Group_1_Condition_5_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '同学说，考研初试成绩快出了。小晴说，____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我 相信 自己 会 通过, 题目 都会做。', a: 'x-x-x 较少 的话 嘛 闪耀, x-x-x 领头羊。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
        .test.passed()
        .failure(
            newText("<div style='text-align:center;color:#e74c3c;font-size:1.3em;'>✗ 请重新选择</div>").print()
        )
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小晴题目都会做。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '16');


// list1: 80 trials

newTrial('l1_Group_1_Condition_1_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '峰峰和磊磊想给小陈带一杯饮料。峰峰：小陈是还喝咖啡还是奶茶？磊磊：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小陈 说 她 想喝 咖啡 来着 ,我们 买一杯。', a: 'x-x-x 个 三 定局 看清 烟火 x-x-x 消防栓。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小陈想喝咖啡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '1');

newTrial('l1_Group_1_Condition_4_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '琳琳和彤彤想送只宠物给张华。琳琳：张华昨天说了什么？彤彤：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张华 说 他 喜欢 小猫 来着 ,我们 等会 去看。', a: 'x-x-x 汁 岁 根号 透明 与其 x-x-x 菱形 拟人。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张华喜欢小猫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '2');

newTrial('l1_Group_1_Condition_3_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '芬芬爸爸和妈妈在讨论今晚的晚餐。爸爸：芬芬今晚想吃牛肉吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芬芬 说 她 想吃 大虾 来着 ,今天 大虾 新鲜。', a: 'x-x-x 条 位 完事 勇气 咩咩 x-x-x 比喻 键盘。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芬芬想吃大虾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '3');

newTrial('l1_Group_1_Condition_2_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和学长在讨论小明的社团。老师：小明今年会喜欢网球社吗？学长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 喜欢 网球 来着 ,等会 他 会报名。', a: 'x-x-x 件 首 名词 抠门 耳蜗 x-x-x 了 逆命题。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明喜欢足球。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '4');

newTrial('l1_Group_2_Condition_1_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位秘书在讨论老板的行程。秘书A：老板是想坐高铁还是飞机？秘书B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 想坐 高铁 来着 ,我们 帮他 订票。', a: 'x-x-x 块 串 得令 空气 咕叽 x-x-x 啤酒 奶油。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板想坐高铁。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '1');

newTrial('l1_Group_2_Condition_4_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和班长在讨论小李的选修课。老师：小李昨天说跟你说什么？班长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 她 会选 数学 来着 ,他 热爱 数学。', a: 'x-x-x 根 件 成败 呼吸 憎恨 x-x-x 森林 光临。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想选物理。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '2');

newTrial('l1_Group_2_Condition_3_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给妹妹报兴趣班。妈妈：妹妹想学小提琴吗？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想学 钢琴 来着 ,因为 小提琴 很难。', a: 'x-x-x 颗 张 法令 彻底 哼唧 x-x-x 含羞草 屋顶。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想学钢琴。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '3');

newTrial('l1_Group_2_Condition_2_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '兰兰和峰峰想买点水果给小彭。兰兰：小彭爱吃苹果吗？峰峰：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彭 说 他 想吃 苹果 来着 ,因为 苹果 很脆。', a: 'x-x-x 粒 架 作罢 剧情 呕吐 x-x-x 师傅 法师。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彭想吃芒果。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '4');

newTrial('l1_Group_3_Condition_1_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论给小彤的生日礼物。爸爸：小彤想要平板还是相机？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彤 说 她 想要 相机 来着 ,因为 想学 摄影。', a: 'x-x-x 片 辆 句式 体现 咕哝 x-x-x 公式 圆圈。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彤想要相机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '1');

newTrial('l1_Group_3_Condition_4_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '教练和领队在讨论小张的训练计划。教练：小张开学初说了什么？领队：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 想学 长跑 来着 ,因为 喜欢 跑步。', a: 'x-x-x 勺 栋 头发 继续 笔画 x-x-x 嫦娥 液体。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张想学长跑。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '2');

newTrial('l1_Group_3_Condition_3_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给森森报外语兴趣班。爸爸：森森会想学德语吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '森森 说 她 想学 法语 来着 ,因为 喜欢 法国。', a: 'x-x-x 桌 次 公交 沙漠 颗颗 x-x-x 小乔 如何。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '森森想学德语。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '3');

newTrial('l1_Group_3_Condition_2_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摊主和熟客在讨论孩子的口味。摊主：你家孩子爱吃菠菜吗？熟客：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '孩子 说 他 想吃 菠菜 来着 ,因为 营养 丰富。', a: 'x-x-x 椅 此 月亮 彩虹 滑稽 x-x-x 三国 大鹅。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '孩子想吃菠菜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '4');

newTrial('l1_Group_4_Condition_1_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给笑笑报美术兴趣班。爸爸：笑笑想学习油画还是素描？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '笑笑 说 她 想学 油画 来着 ,因为 色彩 丰富。', a: 'x-x-x 辆 呵 山峰 莲藕 丑陋 x-x-x 哪吒 皮肤。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑想学素描。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '1');

newTrial('l1_Group_4_Condition_4_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '设计师在向助手确认业主的方案。设计师：业主刚刚打电话说了什么？助手：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '业主 说 他 喜欢 中式 来着 ,因为 简洁 大方。', a: 'x-x-x 艘 种 呵呵 身边 喉咙 x-x-x 太子 奇数。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '业主喜欢中式装修。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '2');

newTrial('l1_Group_4_Condition_3_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '文文和欣欣准备给小娟买点水果。文文：小娟爱吃香蕉吗？欣欣：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小娟 说 她 爱吃 苹果 来着 ,因为 清甜 可口。', a: 'x-x-x 串 杯 琴弦 高峰 飘渺 x-x-x 妲己 射手。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小娟爱吃香蕉。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '3');

newTrial('l1_Group_4_Condition_2_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '师姐和师妹想给老师买束鲜花。师妹：老师喜欢玫瑰吗？师姐：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老师 说 她 喜欢 玫瑰 来着 ,因为 非常 浪漫。', a: 'x-x-x 碟 支 破损 章节 耳朵 x-x-x 李白 眉毛。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师喜欢月季。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '4');

newTrial('l1_Group_1_Condition_1_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '浩浩和阳阳想给妹妹带一份甜品。浩浩：妹妹是爱吃蛋糕还是布丁？阳阳：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想吃 蛋糕 来着 ,很久 没 吃了。', a: 'x-x-x 把 朵 雕刻 计较 空洞 x-x-x 呵 吧唧。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想吃蛋糕。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '5');

newTrial('l1_Group_1_Condition_4_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位员工想给老板买一份茶叶。员工A：老板昨天说了什么？员工B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 喜欢 红茶 来着 ,叫 我们 带一些。', a: 'x-x-x 丛 块 碗筷 确实 爱好 x-x-x 皇后。 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板喜欢绿茶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '6');

newTrial('l1_Group_1_Condition_3_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给弟弟买一件衬衫。爸爸：弟弟喜欢灰色吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 喜欢 蓝色 来着 ,因为 灰色 显黑。', a: 'x-x-x 束 件 僵尸 无力 幻象 x-x-x 刺耳 面包。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟喜欢灰色。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '7');

newTrial('l1_Group_1_Condition_2_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '暑假爸爸和妈妈想带小李出去旅游。爸爸：小李会想去新疆玩吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 他 想去 新疆 来着 ,因为 想吃 羊肉。', a: 'x-x-x 朵 双 指南 渠道 公鸡 x-x-x 条目 您说。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想去新疆。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '8');

newTrial('l1_Group_2_Condition_1_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想给弟弟买玩具。姐姐：弟弟是想要拼图还是积木呢？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 想要 拼图 来着 ,叫 我们 带一个。', a: 'x-x-x 张 片 科学 分子 空虚 x-x-x 火箭 而且。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟想要积木。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '5');

newTrial('l1_Group_2_Condition_4_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐和笑笑想带约翰逛北京。乐乐：约翰有说什么吗？笑笑：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '约翰 说 他 想去 故宫 来着 ,因为 喜欢 建筑。', a: 'x-x-x 篇 朵 账单 人头 课本 x-x-x 问卷 恋爱。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '约翰想去故宫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '6');

newTrial('l1_Group_2_Condition_3_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爷爷想给小华寄一些自种蔬菜。爷爷：小华喜欢吃萝卜吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小华 说 他 想吃 番茄 来着 ,等会 寄一些 回去。', a: 'x-x-x 首 头 火焰 还是 叮当 x-x-x 原子弹 墨子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小华想吃萝卜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '7');

newTrial('l1_Group_2_Condition_2_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '奶奶想买点零食给小明。奶奶：小明想吃核桃吗？爷爷：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 想吃 核桃 来着 ,等会 买 多一些。', a: 'x-x-x 册 颗 居民 羡慕 高山 x-x-x 咚 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明想吃红薯。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '8');

newTrial('l1_Group_3_Condition_1_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈和爸爸在准备小刚明天的早点。妈妈：小刚是喜欢吃馒头还是面条？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小刚 说 他 想吃 面条 来着 ,热乎乎 ,很满足。', a: 'x-x-x 副 根 窗户 后果 哗啦 x-x-x 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小刚想吃面条。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '5');

newTrial('l1_Group_3_Condition_4_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在为蕾蕾的派对准备食材。爸爸：蕾蕾今早说了什么？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '蕾蕾 说 她 想吃 汉堡 来着 ,很久 没 吃了。', a: 'x-x-x 幅 台 帽子 水平 瓷器 x-x-x 嗯 蛋白。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '蕾蕾想吃汉堡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '6');

newTrial('l1_Group_3_Condition_3_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想买点喝的带给小红。姐姐：小红爱喝酸奶吗？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小红 说 她 想喝 果汁 来着 ,夏天 喝 很清爽。', a: 'x-x-x 尾 辆 老鼠 更加 噼啪 x-x-x 噢 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小红想喝酸奶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '7');

newTrial('l1_Group_3_Condition_2_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '组长和助理在商量给客户的礼品。组长：客户想要鼠标吗？助理：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '客户 说 他 想要 鼠标 来着 ,旧的 坏了。', a: 'x-x-x 瓶 片 绿灯 公理 鼠标 x-x-x 直径。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '客户想要耳机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '8');

newTrial('l1_Group_4_Condition_1_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小祝和小陈在挑选客厅的摆件。小陈：妈妈是喜欢花瓶还是挂画？小祝：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妈妈 说 她 喜欢 花瓶 来着 ,放着 非常 美观。', a: 'x-x-x 罐 篇 偶数 分钟 哼哧 x-x-x 相机 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈喜欢花瓶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '5');

newTrial('l1_Group_4_Condition_4_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给芳芳报舞蹈班。爸爸：芳芳说了什么？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芳芳 说 她 想学 街舞 来着 ,看着 很酷。', a: 'x-x-x 盒 座 剪刀 兔子 蒸馏 x-x-x 盒子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芳芳想学芭蕾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '6');

newTrial('l1_Group_4_Condition_3_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位老师想送一本书给小张。老师A：小张平时爱读散文吗？老师B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 爱读 小说 来着 ,因为 情节 精彩。', a: 'x-x-x 袋 杯 风雪 鳄鱼 眉毛 x-x-x 椰子 孙权。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张爱读小说。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '7');

newTrial('l1_Group_4_Condition_2_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论今晚的饭菜。爸爸：小芳想吃排骨吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小芳 说 她 想吃 排骨 来着 ,很久 没 吃了。', a: 'x-x-x 碟 箱 理智 倾诉 抽象 x-x-x 嗯 刺客。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小芳想吃清蒸鱼。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '8');

newTrial('l1_Group_1_Condition_5_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '学校要挑旗手。老师问：“这两个学生谁合适？”老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 男生 高 ,选他吧。', a: 'x-x-x 重复 凭 x-x-x'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师认为那个男生更适合当旗手。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '9');

newTrial('l1_Group_1_Condition_8_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '服装店今年的新款销量不太好。老板想知道原因。店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 黑裙子 很 长 ,容易 踩到。', a: 'x-x-x 高远球 x-x-x 据 x-x-x 体温。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员觉得裙子太长是个问题。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '10');

newTrial('l1_Group_1_Condition_7_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工人在打扫院子。工人说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '左边的 水池 深 ,小孩 别 靠近。', a: 'x-x-x 开始 凭 x-x-x 呗 他们。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工人提醒小孩不要靠近水池。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '11');

newTrial('l1_Group_1_Condition_6_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师们在商量今年春游的时间。张老师问这周三合适还是周五合适？李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周三 天气 很 热 ,还是 周五 吧。', a: 'x-x-x 懦弱 x-x-x 由 x-x-x 而已 将。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师认为周五比周三更适合春游。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '12');

newTrial('l1_Group_2_Condition_5_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '音乐老师在排班级合唱的队形。助教问：“明明和小丽谁站在第一排好呀？”老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小丽 个子 矮 ,让 她 站前面。', a: 'x-x-x 时候 泪 x-x-x 呗 瓜子壳。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师让小丽站在后排。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '9');

newTrial('l1_Group_2_Condition_8_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '笑笑养了一只小乌龟。她给好朋友妙妙介绍小乌龟的习性。笑笑说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '乌龟 跑步 很 慢 ,胆子 也 不大。', a: 'x-x-x 姨婆 x-x-x 被 x-x-x 喽 马路。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑说乌龟胆子很大。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '10');

newTrial('l1_Group_2_Condition_7_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐的生日要到了。妈妈在和爸爸商量派对的安排。妈妈说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周五 放学 晚 ,派对 得要 推迟。', a: 'x-x-x 皇后 趁 x-x-x 李白 大招。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈说派对可能要晚点开始。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '11');

newTrial('l1_Group_2_Condition_6_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小高和小王打算暑假自驾回老家。他们在商量走高速和国道哪个更划算。小高说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '高速 收费 很 贵 ,但是 不 绕路。', a: 'x-x-x 孙权 x-x-x 将 x-x-x 吧 妲己。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小高和小王准备自驾回老家。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '12');

newTrial('l1_Group_3_Condition_5_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '派对上，丽丽请希希帮她端 一下自己的橙汁。希希说：“这里有三杯橙子，哪个是你的？”丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 那杯 满 ,杯里 没有 吸管。', a: 'x-x-x 类似 脱 x-x-x 团结 特别。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽说她的杯子里放了吸管。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '9');

newTrial('l1_Group_3_Condition_8_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演出快开始了。经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这一排 现在 很 空 还能 ,进人。', a: 'x-x-x 鳄鱼 x-x-x 按 x-x-x 卫星。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '经理说这一排已经坐满了人。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '10');

newTrial('l1_Group_3_Condition_7_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小朋友把水桶打翻了，清洁工正在打扫。工人说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这边 地面 湿 ,小心 滑倒。', a: 'x-x-x 药性 论 x-x-x 流泪。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工人提醒大家小心滑倒。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '11');

newTrial('l1_Group_3_Condition_6_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '木工和业主在敲定家具定制细节。业主问：“桌板选松木还是胡桃？”木工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '胡桃 木质 很 硬 ,还是 胡桃木。', a: 'x-x-x 多云 x-x-x 趁 x-x-x 星期一。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '木工建议选松木做桌板。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '12');

newTrial('l1_Group_4_Condition_5_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '销售在和张华确认新屋的楼层。张华问：低层好还是高层好？张华说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '低层 楼房 吵 ,所以 选 高层。', a: 'x-x-x 日语 沿 x-x-x 么 教堂。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '销售觉得低层房屋更好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '9');

newTrial('l1_Group_4_Condition_8_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '比赛结束后，老师们在整理道具。李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 粉裙子 很 脏 ,别要了。', a: 'x-x-x 学生卡 x-x-x 由 x-x-x'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师说那条粉裙子很干净。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '10');

newTrial('l1_Group_4_Condition_7_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '班里这个月没有得到精神文明奖，辅导员问班长原因。班长说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '男生 寝室 乱 ,扣了 很多分。', a: 'x-x-x 哪条 把 x-x-x 充电器。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '这个月班级得到了精神文明奖。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '11');

newTrial('l1_Group_4_Condition_6_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '公司开会讨论竞标方案。总裁问：“咱们和对手的方案哪个更可行？”经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '他们的 方案 很 差 ,完全 没法 落地。', a: 'x-x-x 走了 x-x-x 依 x-x-x 师姐 楼梯。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '经理认为对手的方案很好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '12');

newTrial('l1_Group_1_Condition_5_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '骨科会诊，医生们正 在看CT结果。实习生问：“两个肩膀我们先看哪一边？”医生说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '右边的 影像 清楚 ,先看 右边的。', a: 'x-x-x 难受 回去 x-x-x 塑料袋。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '医生说右边的影像比较清楚。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '13');

newTrial('l1_Group_1_Condition_8_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '记者正在整理采访素材。记者说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '前面的 录音 很 模糊 ,可能 还得 重录。', a: 'x-x-x 怀念 x-x-x 药水 x-x-x 皇帝 钓鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '记者觉得前面的录音不够清晰。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '14');

newTrial('l1_Group_1_Condition_7_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '水果店老板正在向顾客推荐今天的水果。老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '左边 草莓 新鲜 ,可以买 一点。', a: 'x-x-x 那年 绝情 x-x-x 后羿。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板在向顾客推荐桑葚。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '15');

newTrial('l1_Group_1_Condition_6_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '实习生们在讨 论三位带队老师。小王问：“你们觉得谁最不好相处？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张经理 态度 很 严厉 ,我 害怕 他。', a: 'x-x-x 而已 x-x-x 车厢 x-x-x 后羿 穿。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得张经理最不好相处。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '16');

newTrial('l1_Group_2_Condition_5_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '阿明和小琪在讨论 在讨论通勤方案。阿明问：“哪条线人更少？”小琪说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '地铁 二号线 拥挤 ,还是 坐 四号线。', a: 'x-x-x 东北虎 绿豆 x-x-x 吧 龙舌兰。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小琪说地铁二号线人比较少。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '13');

newTrial('l1_Group_2_Condition_8_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小张刚搬进新家，邀请小李来作客。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 沙发 很 舒服 ,坐久 也 不累。', a: 'x-x-x 围绕 x-x-x 佣人 x-x-x 把 鼠标。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说那个沙发不舒服。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '14');

newTrial('l1_Group_2_Condition_7_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小赵负责的专题报道进展非常慢。主编在安慰她。主编说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '你的 选题 复杂 ,需要 查很多 资料。', a: 'x-x-x 首都 罪人 x-x-x 晾衣杆 饼干。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主编说选题本身很复杂，所以进展慢。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '15');

newTrial('l1_Group_2_Condition_6_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工程师 在测试网络系统。经理问：“哪个服务器更可靠？”工程师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 系统 很 稳定 ,先用 这一套。', a: 'x-x-x 环绕 x-x-x 祷告 x-x-x 晾衣杆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工程师说这个系统很可靠。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '16');

newTrial('l1_Group_3_Condition_5_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '厨师长问张师傅：“咱俩谁的刀更好用？”张师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 刀片 锋利 ,切肉 又快 又薄。', a: 'x-x-x 海里 信徒 x-x-x 过敏 泪水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张师傅觉得自己的刀比厨师长的好用。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '13');

newTrial('l1_Group_3_Condition_8_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '游客问老板为什么不能选楼下的房间。老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '楼下 房间 很 潮湿 ,最近 总在 下雨。', a: 'x-x-x 眷恋 x-x-x 访学 x-x-x 潇洒 天地。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板说楼下的房间太潮湿了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '14');

newTrial('l1_Group_3_Condition_7_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈很喜欢新保姆准备的晚饭。妈妈说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '鸡汤 味道 清淡 ,晚上 喝着 舒服。', a: 'x-x-x 再见 恋人 x-x-x 银子 匆匆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈对保姆做的饭不满意。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '15');

newTrial('l1_Group_3_Condition_6_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '拍摄进度 很慢。工作人员问导演：“今天谁状态不太好？”导演说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 演员 很 紧张 ,刚才 一直 忘词。', a: 'x-x-x 看见 x-x-x 椭圆 x-x-x 萝卜 鲸鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '导演说那个演员状态不太好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '16');

newTrial('l1_Group_4_Condition_5_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '同学们讨论聚餐地点。小王问：“去哪家店比较好？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这家 饭店 热闹 ,聚会 更有 气氛。', a: 'x-x-x 物理 耳机 x-x-x 山脉 篮球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得这家饭店太冷清了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '13');

newTrial('l1_Group_4_Condition_8_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '孩子正在准备考试。爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '二楼 教室 很 安静 ,适合 复习。', a: 'x-x-x 海底 x-x-x 汽车 x-x-x 恩怨。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸说二楼教室很安静。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '14');

newTrial('l1_Group_4_Condition_7_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '员工们正在整理材料。员工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '现在的 流程 麻烦 ,需要 很多 文件。', a: 'x-x-x 出现 黄灯 x-x-x 罢了 涨潮。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '员工说现在的报销流程很麻烦。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '15');

newTrial('l1_Group_4_Condition_6_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '顾客 正在挑生日蛋糕。顾客问：“这两款哪个卖得好？”店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这款 样式 很 新颖 ,老年人 可能 不喜欢。', a: 'x-x-x 抬头 x-x-x 南瓜 x-x-x 门口 消毒水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员推荐这款蛋糕因为样式新颖。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '16');

newTrial('l1_Group_1_Condition_5_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友们在 讨论去哪儿露营。小王问：“山里和湖边晚上都很舒服。”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '山里 晚上 冷 ,还是 住 湖边', a: 'x-x-x 短剧 将 x-x-x 呢 非常。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说山里晚上很冷。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '17');

newTrial('l1_Group_1_Condition_8_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '几个同学买完水果回宿舍。小王说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这种 李子 很 酸 ,我得 配点 蜂蜜。', a: 'x-x-x 左手 x-x-x 趁 x-x-x 那里 牢骚。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小王说这种李子很甜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '18');

newTrial('l1_Group_1_Condition_7_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '快递员们在整理需要配送的包裹。王师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 箱子 轻 ,一个人 能 拿动。', a: 'x-x-x 强烈 由 x-x-x 格 数字。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '王师傅说这个箱子很轻。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '19');

newTrial('l1_Group_1_Condition_6_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一家人在市场挑鱼。妈妈问：“哪条更新鲜？”老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 鲫鱼 很 腥 ,旁边 那条 好些。', a: 'x-x-x 灵光 x-x-x 论 x-x-x 空白 数字。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板觉得那条鲫鱼更新鲜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '20');

newTrial('l1_Group_2_Condition_5_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈 妈带丽丽来买鞋。妈妈问：“这两双哪双更合脚？”丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '红的 这双 松 ,有没有 小号。', a: 'x-x-x 入座 沿 x-x-x 至上。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽觉得红的这双鞋太紧了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '17');

newTrial('l1_Group_2_Condition_8_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小李再向顾客介绍店里的咖啡。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 新款 很 苦 ,女生 可能 喝不惯。', a: 'x-x-x 小心 x-x-x 把 x-x-x 馒头 羽毛球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李向顾客介绍这款咖啡味道很甜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '18');

newTrial('l1_Group_2_Condition_7_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸非常满意他买的新床垫。爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 床垫 软 ,睡着 特别 舒服。', a: 'x-x-x 听说 所 x-x-x 包子 烧麦。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸后悔买了新床垫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '19');

newTrial('l1_Group_2_Condition_6_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摄影 组在挑拍摄场地。导演问：“哪个车间更适合？”摄影师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '机修 车间 很 旧 ,拍出来 更有 感觉。', a: 'x-x-x 珍惜 x-x-x 按 x-x-x 鸡爪 了。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '摄影师觉得机修车间不适合拍摄。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '20');

newTrial('l1_Group_3_Condition_5_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '公司在讨论岗位安排。经理问：“小张和小李谁更适合负责外勤？”主管说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 做事 灵活 ,外联 更有 经验。', a: 'x-x-x 泰国 饺子 x-x-x 排骨 千金。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主管觉得小张更适合负责外勤。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '17');

newTrial('l1_Group_3_Condition_8_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '自由活动前，导游正在提醒游客注意事项。导游说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那条 山路 很 危险 ,不要 一个人 过去。', a: 'x-x-x 星座 x-x-x 草莓 x-x-x 月饼盒 绿豆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '导游说所有的路都很安全。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '18');

newTrial('l1_Group_3_Condition_7_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一家人在讨论新房的装修方案。爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 客厅 宽敞 ,以后 还能 放钢琴。', a: 'x-x-x 心碎 生菜 x-x-x 曹操 每一天。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸说这个客厅太小了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '19');

newTrial('l1_Group_3_Condition_6_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师们讨 论考试成绩。年级组长问：“哪个班表现得不好？”李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '三班 成绩 很 糟糕 ,平均分 最低。', a: 'x-x-x 药水 x-x-x 海峡 x-x-x 曹操。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师说三班的成绩不太好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '20');

newTrial('l1_Group_4_Condition_5_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老 师检查教室卫生。老师问：“哪个小组表现得好？”班长说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '第二组 桌椅 整齐 ,卫生 也很 干净。', a: 'x-x-x 绝情 光临 x-x-x 牛蛙 肉丸。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师认为第二组表现得好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '17');

newTrial('l1_Group_4_Condition_8_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小李和朋友去了新开的游乐场。妹妹问他游乐场好玩吗？小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '空中 飞毯 很 刺激 ,我们 特别 喜欢。', a: 'x-x-x 粉碎 x-x-x 怜悯 x-x-x 榴莲 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得空中飞毯一点也不刺激。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '18');

newTrial('l1_Group_4_Condition_7_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '飞行员汇报飞行情况。飞行员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '南部 航线 平稳 ,几乎 没有 颠簸。', a: 'x-x-x 清楚 专辑 x-x-x 匆匆 得。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '飞行员说航线非常颠簸。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '19');

newTrial('l1_Group_4_Condition_6_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演 员们在排练话剧。导演问：“哪句台词需要改？”演员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '最后 那句 很 别扭 ,而且 不太 连贯。', a: 'x-x-x 泪水 x-x-x 天赋 x-x-x 手腕 树叶。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '演员觉得最后那句台词需要修改。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '20');


// list2: 80 trials

newTrial('l2_Group_1_Condition_2_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '峰峰和磊磊想给小陈带一杯饮料。峰峰：小陈想喝咖啡吗？磊磊：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小陈 说 她 想喝 咖啡 来着 ,我们 买一杯。', a: 'x-x-x 个 三 定局 看清 烟火 x-x-x 消防栓。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小陈想喝咖啡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '1');

newTrial('l2_Group_1_Condition_1_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '琳琳和彤彤想送只宠物给张华。琳琳：张华是喜欢小猫还是小狗？彤彤：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张华 说 他 喜欢 小猫 来着 ,我们 等会 去看。', a: 'x-x-x 汁 岁 根号 透明 与其 x-x-x 菱形 拟人。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张华喜欢小猫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '2');

newTrial('l2_Group_1_Condition_4_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '芬芬爸爸和妈妈在讨论今晚的晚餐。爸爸：芬芬昨晚说了什么？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芬芬 说 她 想吃 大虾 来着 ,今天 大虾 新鲜。', a: 'x-x-x 条 位 完事 勇气 啦啦 x-x-x 比喻 键盘。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芬芬想吃大虾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '3');

newTrial('l2_Group_1_Condition_3_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和学长在讨论小明的社团。老师：小明今年会喜欢足球社吗？学长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 喜欢 网球 来着 ,等会 他 会报名。', a: 'x-x-x 件 首 名词 抠门 噗嗤 x-x-x 了 逆命题。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明喜欢足球。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '4');

newTrial('l2_Group_2_Condition_2_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位秘书在讨论老板的行程。秘书A：老板是出差想坐高铁吗？秘书B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 想坐 高铁 来着 ,我们 帮他 订票。', a: 'x-x-x 块 串 得令 空气 拔河 x-x-x 啤酒 奶油。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板想坐高铁。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '1');

newTrial('l2_Group_2_Condition_1_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和班长在讨论小李的选修课。老师：小李会选修数学还是物理？班长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 她 会选 数学 来着 ,他 热爱 数学。', a: 'x-x-x 根 件 成败 呼吸 哧溜 x-x-x 森林 光临。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想选物理。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '2');

newTrial('l2_Group_2_Condition_4_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给妹妹报兴趣班。妈妈：妹妹昨晚跟你说了什么？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想学 钢琴 来着 ,因为 小提琴 很难。', a: 'x-x-x 颗 张 法令 彻底 苔藓 x-x-x 含羞草 屋顶。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想学钢琴。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '3');

newTrial('l2_Group_2_Condition_3_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '兰兰和峰峰想买点水果给小彭。兰兰：小彭爱吃芒果吗？峰峰：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彭 说 他 想吃 苹果 来着 ,因为 苹果 很脆。', a: 'x-x-x 粒 架 作罢 剧情 咔嚓 x-x-x 师傅 法师。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彭想吃芒果。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '4');

newTrial('l2_Group_3_Condition_2_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论给小彤的生日礼物。爸爸：小彤想要相机吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彤 说 她 想要 相机 来着 ,因为 想学 摄影。', a: 'x-x-x 片 辆 句式 体现 喷嚏 x-x-x 公式 圆圈。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彤想要相机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '1');

newTrial('l2_Group_3_Condition_1_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '教练和领队在讨论小张的训练计划。教练：小张是想学长跑还是游泳？领队：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 想学 长跑 来着 ,因为 喜欢 跑步。', a: 'x-x-x 勺 栋 头发 继续 朵朵 x-x-x 嫦娥 液体。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张想学长跑。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '2');

newTrial('l2_Group_3_Condition_4_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给森森报外语兴趣班。爸爸：森森昨晚说了什么吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '森森 说 她 想学 法语 来着 ,因为 喜欢 法国。', a: 'x-x-x 桌 次 公交 沙漠 下雨 x-x-x 小乔 如何。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '森森想学德语。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '3');

newTrial('l2_Group_3_Condition_3_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摊主和熟客在讨论孩子的口味。摊主：你家孩子爱吃芹菜吗？熟客：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '孩子 说 他 想吃 菠菜 来着 ,因为 营养 丰富。', a: 'x-x-x 椅 此 月亮 彩虹 颗粒 x-x-x 三国 大鹅。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '孩子想吃菠菜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '4');

newTrial('l2_Group_4_Condition_2_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给笑笑报美术兴趣班。爸爸：笑笑想学油画吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '笑笑 说 她 想学 油画 来着 ,因为 色彩 丰富。', a: 'x-x-x 辆 呵 山峰 莲藕 丑陋 x-x-x 哪吒 皮肤。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑想学素描。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '1');

newTrial('l2_Group_4_Condition_1_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '设计师在向助手确认业主的方案。设计师：业主是喜欢中式还是欧式？助手：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '业主 说 他 喜欢 中式 来着 ,因为 简洁 大方。', a: 'x-x-x 艘 种 呵呵 身边 喉咙 x-x-x 太子 奇数。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '业主喜欢中式装修。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '2');

newTrial('l2_Group_4_Condition_4_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '文文和欣欣准备给小娟买点水果。文文：小娟说了什么吗？欣欣：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小娟 说 她 爱吃 苹果 来着 ,因为 清甜 可口。', a: 'x-x-x 串 杯 琴弦 高峰 虚伪 x-x-x 妲己 射手。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小娟爱吃香蕉。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '3');

newTrial('l2_Group_4_Condition_3_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '师姐和师妹想给老师买束鲜花。师妹：老师喜欢月季吗？师姐：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老师 说 她 喜欢 玫瑰 来着 ,因为 非常 浪漫。', a: 'x-x-x 碟 支 破损 章节 虚浮 x-x-x 李白 眉毛。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师喜欢月季。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '4');

newTrial('l2_Group_1_Condition_2_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '浩浩和阳阳想给妹妹带一份甜品。浩浩：妹妹应该爱吃蛋糕吗？阳阳：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想吃 蛋糕 来着 ,很久 没 吃了。', a: 'x-x-x 把 朵 雕刻 计较 饺子 x-x-x 呵 吧唧。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想吃蛋糕。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '5');

newTrial('l2_Group_1_Condition_1_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位员工想给老板买一份茶叶。员工A：老板是喜欢红茶还是绿茶？员工B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 喜欢 红茶 来着 ,叫 我们 带一些。', a: 'x-x-x 丛 块 碗筷 确实 浮华 x-x-x 皇后。 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板喜欢绿茶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '6');

newTrial('l2_Group_1_Condition_4_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给弟弟买一件衬衫。爸爸：弟弟打电话说了什么？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 喜欢 蓝色 来着 ,因为 灰色 显黑。', a: 'x-x-x 束 件 僵尸 无力 猴子 x-x-x 刺耳 面包。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟喜欢灰色。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '7');

newTrial('l2_Group_1_Condition_3_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '暑假爸爸和妈妈想带小李出去旅游。爸爸：小李会想去四川玩吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 他 想去 新疆 来着 ,因为 想吃 羊肉。', a: 'x-x-x 朵 双 指南 渠道 纷飞 x-x-x 条目 您说。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想去新疆。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '8');

newTrial('l2_Group_2_Condition_2_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想给弟弟买玩具。姐姐：弟弟是想要积木吗？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 想要 拼图 来着 ,叫 我们 带一个。', a: 'x-x-x 张 片 科学 分子 牛奶 x-x-x 火箭 而且。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟想要积木。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '5');

newTrial('l2_Group_2_Condition_1_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐和笑笑想带约翰逛北京。乐乐：约翰是想去故宫还是长城？笑笑：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '约翰 说 他 想去 故宫 来着 ,因为 喜欢 建筑。', a: 'x-x-x 篇 朵 账单 人头 课本 x-x-x 问卷 恋爱。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '约翰想去故宫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '6');

newTrial('l2_Group_2_Condition_4_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爷爷想给小华寄一些自种蔬菜。爷爷：小华刚刚打电话来说什么？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小华 说 他 想吃 番茄 来着 ,等会 寄一些 回去。', a: 'x-x-x 首 头 火焰 还是 水流 x-x-x 原子弹 墨子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小华想吃萝卜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '7');

newTrial('l2_Group_2_Condition_3_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '奶奶想买点零食给小明。奶奶：小明想吃红薯吗？爷爷：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 想吃 核桃 来着 ,等会 买 多一些。', a: 'x-x-x 册 颗 居民 羡慕 扑通 x-x-x 咚 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明想吃红薯。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '8');

newTrial('l2_Group_3_Condition_2_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈和爸爸在准备小刚明天的早点。妈妈：小刚明早想吃面条吗？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小刚 说 他 想吃 面条 来着 ,热乎乎 ,很满足。', a: 'x-x-x 副 根 窗户 后果 琵琶 x-x-x 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小刚想吃面条。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '5');

newTrial('l2_Group_3_Condition_1_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在为蕾蕾的派对准备食材。爸爸：蕾蕾说是想吃汉堡还是披萨？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '蕾蕾 说 她 想吃 汉堡 来着 ,很久 没 吃了。', a: 'x-x-x 幅 台 帽子 水平 瓷器 x-x-x 嗯 蛋白。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '蕾蕾想吃汉堡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '6');

newTrial('l2_Group_3_Condition_4_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想买点喝的带给小红。姐姐：小红刚刚说了什么？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小红 说 她 想喝 果汁 来着 ,夏天 喝 很清爽。', a: 'x-x-x 尾 辆 老鼠 更加 噼啪 x-x-x 噢 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小红想喝酸奶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '7');

newTrial('l2_Group_3_Condition_3_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '组长和助理在商量给客户的礼品。组长：客户想要耳机吗？助理：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '客户 说 他 想要 鼠标 来着 ,旧的 坏了。', a: 'x-x-x 瓶 片 绿灯 公理 鼠标 x-x-x 直径。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '客户想要耳机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '8');

newTrial('l2_Group_4_Condition_2_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小祝和小陈在挑选客厅的摆件。小陈：妈妈应该喜欢花瓶吧。小祝：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妈妈 说 她 喜欢 花瓶 来着 ,放着 非常 美观。', a: 'x-x-x 罐 篇 偶数 分钟 哼哧 x-x-x 相机 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈喜欢花瓶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '5');

newTrial('l2_Group_4_Condition_1_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给芳芳报舞蹈班。爸爸：芳芳是想学街舞还是芭蕾？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芳芳 说 她 想学 街舞 来着 ,看着 很酷。', a: 'x-x-x 盒 座 剪刀 兔子 蒸馏 x-x-x 盒子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芳芳想学芭蕾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '6');

newTrial('l2_Group_4_Condition_4_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位老师想送一本书给小张。老师A：小张上次说了什么？老师B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 爱读 小说 来着 ,因为 情节 精彩。', a: 'x-x-x 袋 杯 风雪 鳄鱼 眉毛 x-x-x 椰子 孙权。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张爱读小说。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '7');

newTrial('l2_Group_4_Condition_3_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论今晚的饭菜。爸爸：小芳想吃清蒸鱼吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小芳 说 她 想吃 排骨 来着 ,很久 没 吃了。', a: 'x-x-x 碟 箱 理智 倾诉 抽象 x-x-x 嗯 刺客。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小芳想吃清蒸鱼。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '8');

newTrial('l2_Group_1_Condition_6_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '学校要挑旗手。老师问：“这两个学生谁合适？”老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 男生 很 高 ,选他吧。', a: 'x-x-x 重复 x-x-x 凭 x-x-x'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师认为那个男生更适合当旗手。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '9');

newTrial('l2_Group_1_Condition_5_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '佳佳在商场买裙子。她问店员：“这两条裙子哪条合适？”店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 黑裙子 长 ,没有 小号了。', a: 'x-x-x 高远球 据 x-x-x 量体温。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员认为那条黑裙子不适合佳佳。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '10');

newTrial('l2_Group_1_Condition_8_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工人在打扫院子。工人说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '左边的 水池 很 深 ,小孩 别 靠近。', a: 'x-x-x 开始 x-x-x 凭 x-x-x 呗 他们。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工人提醒小孩不要靠近水池。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '11');

newTrial('l2_Group_1_Condition_7_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师们在商量今年春游的时间。李老师：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周三 天气 热 ,不 适合 户外。', a: 'x-x-x 懦弱 由 x-x-x 煞星 飞机。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师说周三很适合户外活动。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '12');

newTrial('l2_Group_2_Condition_6_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '音乐老师在排班级合唱的队形。助教问：“明明和小丽谁站在第一排好呀？”老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小丽 个子 很 矮 ,让 她 站前面。', a: 'x-x-x 时候 x-x-x 泪 x-x-x 呗 瓜子壳。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师让小丽站在后排。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '9');

newTrial('l2_Group_2_Condition_5_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师在给幼儿园的小朋友讲《龟兔赛跑》的故事。老师问：“跑步的话，乌龟和兔子谁厉害呀？”笑笑说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '乌龟 跑步 慢 ,我猜 兔子 赢。', a: 'x-x-x 姨婆 被 x-x-x 侠客 得。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑觉得兔子会赢。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '10');

newTrial('l2_Group_2_Condition_8_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐的生日要到了。妈妈在和爸爸商量派对的安排。妈妈说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周五 放学 很 晚 ,派对 得要 推迟。', a: 'x-x-x 皇后 x-x-x 趁 x-x-x 李白 大招。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈说派对可能要晚点开始。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '11');

newTrial('l2_Group_2_Condition_7_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小高和小王在商量要不要周末自驾回老家。小高说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '高速 收费 贵 ,要不 国庆 再回。', a: 'x-x-x 孙权 将 x-x-x 橙子 失忆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '高速收费很便宜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '12');

newTrial('l2_Group_3_Condition_6_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '派对上，丽丽请希希帮她端 一下自己的橙汁。希希说：“这里有三杯橙子，哪个是你的？”丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 那杯 很 满 ,杯里 没有 吸管。', a: 'x-x-x 类似 x-x-x 脱 x-x-x 团结 特别。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽说她的杯子里放了吸管。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '9');

newTrial('l2_Group_3_Condition_5_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工作人员在安排明天会议的座位。工作人员问：“张老师坐第一排还是第二排？”经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '第一排 现在 空 ,坐 第一排。', a: 'x-x-x 鳄鱼 据 x-x-x 柠檬水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '经理建议张老师坐第一排。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '10');

newTrial('l2_Group_3_Condition_8_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小朋友把水桶打翻了，清洁工正在打扫。工人说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这边 地面 很 湿 ,小心 滑倒。', a: 'x-x-x 药性 x-x-x 论 x-x-x 流泪。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工人提醒大家小心滑倒。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '11');

newTrial('l2_Group_3_Condition_7_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '木工和业主在敲定家具定制细节。业主想知道为什么胡桃木这么贵。木工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '胡桃 木质 硬 ,能用 更久呀。', a: 'x-x-x 多云 趁 x-x-x 星期一。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '木工说胡桃木能用得更久。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '12');

newTrial('l2_Group_4_Condition_6_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '销售在和张华确认新屋的楼层。张华问：选低层还是高层？张华说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '低层 楼房 很 吵 ,所以 选 高层。', a: 'x-x-x 日语 x-x-x 沿 x-x-x 么 教堂。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '销售觉得低层房屋更好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '9');

newTrial('l2_Group_4_Condition_5_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '舞蹈比赛快到了。老师问：“这两条裙子哪条更干净？”李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 粉裙子 脏 ,选 红的。', a: 'x-x-x 学生卡 依 x-x-x 醒醒。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师在找更干净的裙子。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '10');

newTrial('l2_Group_4_Condition_8_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '班里这个月没有得到精神文明奖，辅导员问班长原因。班长说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '男生 寝室 很 乱 ,扣了 很多分。', a: 'x-x-x 哪条 x-x-x 把 x-x-x 充电器。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '这个月班级得到了精神文明奖。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '11');

newTrial('l2_Group_4_Condition_7_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '长期合作的公司这次没有通过竞标，总裁问经理具体的原因。经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '他们的 方案 差 ,完全 没法 落地。', a: 'x-x-x 走了 依 x-x-x 师姐 楼梯。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '长期合作的公司成功通过了竞标。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '12');

newTrial('l2_Group_1_Condition_6_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '骨科会诊，医生们正 在看CT结果。实习生问：“两个肩膀我们先看哪一边？”医生说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '右边的 影像 很 清楚 ,先看 右边的。', a: 'x-x-x 难受 x-x-x 回去 x-x-x 塑料袋。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '医生说右边的影像比较清楚。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '13');

newTrial('l2_Group_1_Condition_5_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '记者 在整理采访录音。编辑问：“哪段录音能直接用？”记者说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '前面的 录音 模糊 ,后面 那段 好些。', a: 'x-x-x 怀念 药水 x-x-x 皇帝 钓鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '记者说前面的录音很清楚。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '14');

newTrial('l2_Group_1_Condition_8_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '水果店老板正在向顾客推荐今天的水果。老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '左边 草莓 很 新鲜 ,可以买 一点。', a: 'x-x-x 那年 x-x-x 绝情 x-x-x 后羿。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板在向顾客推荐桑葚。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '15');

newTrial('l2_Group_1_Condition_7_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小李和朋友聊起单位的同事。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张经理 态度 严厉 ,但是 是个 热心肠。', a: 'x-x-x 而已 车厢 x-x-x 熊猫 龙舌兰。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说张经理的态度很温和。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '16');

newTrial('l2_Group_2_Condition_6_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '阿明和小琪在讨论 在讨论通勤方案。阿明问：“哪条线人更少？”小琪说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '地铁 二号线 很 拥挤 ,还是 坐 四号线。', a: 'x-x-x 东北虎 x-x-x 绿豆 x-x-x 吧 龙舌兰。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小琪说地铁二号线人比较少。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '13');

newTrial('l2_Group_2_Condition_5_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小张和小 李在商场试沙发。小张问：“你觉得哪张坐着最好？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 沙发 舒服 ,买 这个 吧。', a: 'x-x-x 围绕 佣人 x-x-x 答案 将。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得这个沙发坐着最舒服。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '14');

newTrial('l2_Group_2_Condition_8_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小赵负责的专题报道进展非常慢。主编在安慰她。主编说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '你的 选题 很 复杂 ,需要 查很多 资料。', a: 'x-x-x 首都 x-x-x 罪人 x-x-x 晾衣杆 饼干。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主编说选题本身很复杂，所以进展慢。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '15');

newTrial('l2_Group_2_Condition_7_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工程师正在汇报测试结果。工程师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 系统 稳定 ,暂时 不用 升级。', a: 'x-x-x 环绕 祷告 x-x-x 天敌 绝望。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工程师说系统出了问题。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '16');

newTrial('l2_Group_3_Condition_6_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '厨师长问张师傅：“咱俩谁的刀更好用？”张师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 刀片 很 锋利 ,切肉 又快 又薄。', a: 'x-x-x 海里 x-x-x 信徒 x-x-x 过敏 泪水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张师傅觉得自己的刀比厨师长的好用。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '13');

newTrial('l2_Group_3_Condition_5_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '游客们 在民宿里选房间。游客问：“哪间房住起来更舒服？”老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '楼下 房间 潮湿 ,还是 楼上 更好。', a: 'x-x-x 眷恋 访学 x-x-x 潇洒 天地。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板觉得楼上的房间住起来更舒服。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '14');

newTrial('l2_Group_3_Condition_8_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈很喜欢新保姆准备的晚饭。妈妈说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '鸡汤 味道 很 清淡 ,晚上 喝着 舒服。', a: 'x-x-x 再见 x-x-x 恋人 x-x-x 银子 匆匆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈对保姆做的饭不满意。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '15');

newTrial('l2_Group_3_Condition_7_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演出马上开始了。工作人员问大家准备的怎么样。导演说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 演员 紧张 ,现在 还在 深呼吸。', a: 'x-x-x 看见 椭圆 x-x-x 萝卜 长颈鹿。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '演出已经结束了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '16');

newTrial('l2_Group_4_Condition_6_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '同学们讨论聚餐地点。小王问：“去哪家店比较好？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这家 饭店 很 热闹 ,聚会 更有 气氛。', a: 'x-x-x 物理 x-x-x 耳机 x-x-x 山脉 篮球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得这家饭店太冷清了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '13');

newTrial('l2_Group_4_Condition_5_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '家长们在给孩子选自习室。妈妈问：“哪个教室更适合学习？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '二楼 教室 安静 ,就在 这里。', a: 'x-x-x 海底 汽车 x-x-x 恩怨。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸觉得二楼教室太吵了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '14');

newTrial('l2_Group_4_Condition_8_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '员工们正在整理材料。员工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '现在的 流程 很 麻烦 ,需要 很多 文件。', a: 'x-x-x 出现 x-x-x 黄灯 x-x-x 罢了 涨潮。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '员工说现在的报销流程很麻烦。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '15');

newTrial('l2_Group_4_Condition_7_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '蛋糕店的店员正在向顾客介绍店里的蛋糕。店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这款 样式 新颖 ,销量 一直 不错。', a: 'x-x-x 抬头 南瓜 x-x-x 门口 消毒。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员推荐这款蛋糕的样式很普通。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '16');

newTrial('l2_Group_1_Condition_6_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友们在 讨论去哪儿露营。小王问：“山里和湖边晚上都很舒服。”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '山里 晚上 很 冷 ,还是 住 湖边', a: 'x-x-x 短剧 x-x-x 将 x-x-x 呢 非常。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说山里晚上很冷。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '17');

newTrial('l2_Group_1_Condition_5_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '几个同学在 水果店试吃李子。小王问：“哪一种更适合直接吃？”店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这种 李子 酸 ,不能 直接 吃。', a: 'x-x-x 左手 趁 x-x-x 而已 把。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员认为这种李子不适合直接吃。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '18');

newTrial('l2_Group_1_Condition_8_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '快递员们在整理需要配送的包裹。王师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 箱子 很 轻 ,一个人 能 拿动。', a: 'x-x-x 强烈 x-x-x 由 x-x-x 格 数字。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '王师傅说这个箱子很轻。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '19');

newTrial('l2_Group_1_Condition_7_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈正在厨房处理鱼。妈妈说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 鲫鱼 腥 ,得用 料酒 处理。', a: 'x-x-x 灵光 论 x-x-x 至上 大海。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈说那条鲫鱼有腥味。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '20');

newTrial('l2_Group_2_Condition_6_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈 妈带丽丽来买鞋。妈妈问：“这两双哪双更合脚？”丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '红的 这双 很 松 ,有没有 小号。', a: 'x-x-x 入座 x-x-x 沿 x-x-x 至上。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽觉得红的这双鞋太紧了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '17');

newTrial('l2_Group_2_Condition_5_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友 们在咖啡店聊天。小王问：“最近哪种咖啡销量好？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 新款 苦 ,女生 可能 喝不惯。', a: 'x-x-x 小心 把 x-x-x 馒头 羽毛球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说新款咖啡比较甜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '18');

newTrial('l2_Group_2_Condition_8_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸非常满意他买的新床垫。爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 床垫 很 软 ,睡着 特别 舒服。', a: 'x-x-x 听说 x-x-x 所 x-x-x 包子 烧麦。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸后悔买了新床垫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '19');

newTrial('l2_Group_2_Condition_7_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摄影师在向剧组导演介绍拍摄方案。摄影师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '机修 车间 旧 ,拍出来 更有 感觉。', a: 'x-x-x 珍惜 按 x-x-x 鸡爪 了。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '摄影师说机修车间很新。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '20');

newTrial('l2_Group_3_Condition_6_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '公司在讨论岗位安排。经理问：“小张和小李谁更适合负责外勤？”主管说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 做事 很 灵活 ,外联 更有 经验。', a: 'x-x-x 泰国 x-x-x 饺子 x-x-x 排骨 前进。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主管觉得小张更适合负责外勤。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '17');

newTrial('l2_Group_3_Condition_5_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '游客们 准备爬山。小阳问导游：“走哪条路更安全？”导游说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那条 山路 危险 ,还是 绕远 一点吧。', a: 'x-x-x 星座 草莓 x-x-x 罢了 榨果汁。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '导游说有条山路比较危险。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '18');

newTrial('l2_Group_3_Condition_8_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一家人在讨论新房的装修方案。爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 客厅 很 宽敞 ,以后 还能 放钢琴。', a: 'x-x-x 心碎 x-x-x 生菜 x-x-x 曹操 每一天。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸说这个客厅太小了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '19');

newTrial('l2_Group_3_Condition_7_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '教师大会上，年级组长在总结考试情况。李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '三班 成绩 糟糕 ,家长们 都很 着急。', a: 'x-x-x 药水 海峡 x-x-x 牛蛙 肉丸。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '家长们不在乎成绩。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '20');

newTrial('l2_Group_4_Condition_6_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老 师检查教室卫生。老师问：“哪个小组表现得好？”班长说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '第二组 桌椅 很 整齐 ,卫生 也很 干净。', a: 'x-x-x 绝情 x-x-x 光临 x-x-x 牛蛙 肉丸。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师认为第二组表现得好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '17');

newTrial('l2_Group_4_Condition_5_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友 们在游乐园聊天。小王问：“哪个项目更过瘾？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '空中 飞毯 刺激 ,我们 特别 喜欢。', a: 'x-x-x 粉碎 怜悯 x-x-x 榴莲 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李推荐了空中飞毯。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '18');

newTrial('l2_Group_4_Condition_8_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '飞行员汇报飞行情况。飞行员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '南部 航线 很 平稳 ,几乎 没有 颠簸。', a: 'x-x-x 清楚 x-x-x 专辑 x-x-x 匆匆 得。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '飞行员说航线非常颠簸。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '19');

newTrial('l2_Group_4_Condition_7_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演员们在讨论剧本。演员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '最后 那句 别扭 ,观众 可能 听不懂。', a: 'x-x-x 泪水 天赋 x-x-x 手腕 运动鞋。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '演员说最后那句台词很自然。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '20');


// list3: 80 trials

newTrial('l3_Group_1_Condition_3_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '峰峰和磊磊想给小陈带一杯饮料。峰峰：小陈想喝奶茶吗？磊磊：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小陈 说 她 想喝 咖啡 来着 ,我们 买一杯。', a: 'x-x-x 个 三 定局 看清 烟火 x-x-x 消防栓。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小陈想喝咖啡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '1');

newTrial('l3_Group_1_Condition_2_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '琳琳和彤彤想送只宠物给张华。琳琳：张华喜欢小猫吗？彤彤：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张华 说 他 喜欢 小猫 来着 ,我们 等会 去看。', a: 'x-x-x 汁 岁 根号 透明 与其 x-x-x 菱形 拟人。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张华喜欢小猫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '2');

newTrial('l3_Group_1_Condition_1_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '芬芬爸爸和妈妈在讨论今晚的晚餐。爸爸：芬芬今晚想大虾还是牛肉？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芬芬 说 她 想吃 大虾 来着 ,今天 大虾 新鲜。', a: 'x-x-x 条 位 完事 勇气 咩咩 x-x-x 比喻 键盘。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芬芬想吃大虾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '3');

newTrial('l3_Group_1_Condition_4_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和学长在讨论小明的社团。老师：小明昨晚和你说了什么？学长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 喜欢 网球 来着 ,等会 他 会报名。', a: 'x-x-x 件 首 名词 抠门 耳蜗 x-x-x 了 逆命题。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明喜欢足球。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '4');

newTrial('l3_Group_2_Condition_3_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位秘书在讨论老板的行程。秘书A：老板出差是想坐飞机吗？秘书B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 想坐 高铁 来着 ,我们 帮他 订票。', a: 'x-x-x 块 串 得令 空气 咕叽 x-x-x 啤酒 奶油。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板想坐高铁。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '1');

newTrial('l3_Group_2_Condition_2_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和班长在讨论小李的选修课。老师：小李这学期会选数学吗？班长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 她 会选 数学 来着 ,他 热爱 数学。', a: 'x-x-x 根 件 成败 呼吸 憎恨 x-x-x 森林 光临。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想选物理。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '2');

newTrial('l3_Group_2_Condition_1_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给妹妹报兴趣班。妈妈：妹妹想学钢琴还是小提琴？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想学 钢琴 来着 ,因为 小提琴 很难。', a: 'x-x-x 颗 张 法令 彻底 哼唧 x-x-x 含羞草 屋顶。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想学钢琴。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '3');

newTrial('l3_Group_2_Condition_4_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '兰兰和峰峰想买点水果给小彭。兰兰：小彭今早说了什么？峰峰：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彭 说 他 想吃 苹果 来着 ,因为 苹果 很脆。', a: 'x-x-x 粒 架 作罢 剧情 呕吐 x-x-x 师傅 法师。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彭想吃芒果。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '4');

newTrial('l3_Group_3_Condition_3_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论给小彤的生日礼物。爸爸：小彤想要平板嘛？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彤 说 她 想要 相机 来着 ,因为 想学 摄影。', a: 'x-x-x 片 辆 句式 体现 咕哝 x-x-x 公式 圆圈。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彤想要相机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '1');

newTrial('l3_Group_3_Condition_2_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '教练和领队在讨论小张的训练计划。教练：小张想学长跑吗？领队：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 想学 长跑 来着 ,因为 喜欢 跑步。', a: 'x-x-x 勺 栋 头发 继续 笔画 x-x-x 嫦娥 液体。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张想学长跑。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '2');

newTrial('l3_Group_3_Condition_1_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给森森报外语兴趣班。爸爸：森森是想学法语还是德语？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '森森 说 她 想学 法语 来着 ,因为 喜欢 法国。', a: 'x-x-x 桌 次 公交 沙漠 颗颗 x-x-x 小乔 如何。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '森森想学德语。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '3');

newTrial('l3_Group_3_Condition_4_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摊主和熟客在讨论孩子的口味。摊主：你家今早孩子说了什么？熟客：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '孩子 说 他 想吃 菠菜 来着 ,因为 营养 丰富。', a: 'x-x-x 椅 此 月亮 彩虹 滑稽 x-x-x 三国 大鹅。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '孩子想吃菠菜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '4');

newTrial('l3_Group_4_Condition_3_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给笑笑报美术兴趣班。爸爸：笑笑想学素描吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '笑笑 说 她 想学 油画 来着 ,因为 色彩 丰富。', a: 'x-x-x 辆 呵 山峰 莲藕 丑陋 x-x-x 哪吒 皮肤。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑想学素描。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '1');

newTrial('l3_Group_4_Condition_2_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '设计师在向助手确认业主的方案。设计师：业主喜欢欧式装修吗？助手：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '业主 说 他 喜欢 中式 来着 ,因为 简洁 大方。', a: 'x-x-x 艘 种 呵呵 身边 喉咙 x-x-x 太子 奇数。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '业主喜欢中式装修。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '2');

newTrial('l3_Group_4_Condition_1_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '文文和欣欣准备给小娟买点水果。文文：小娟爱吃苹果还是香蕉？欣欣：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小娟 说 她 爱吃 苹果 来着 ,因为 清甜 可口。', a: 'x-x-x 串 杯 琴弦 高峰 飘渺 x-x-x 妲己 射手。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小娟爱吃香蕉。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '3');

newTrial('l3_Group_4_Condition_4_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '师姐和师妹想给老师买束鲜花。师妹：老师昨天说了什么？师姐：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老师 说 她 喜欢 玫瑰 来着 ,因为 非常 浪漫。', a: 'x-x-x 碟 支 破损 章节 耳朵 x-x-x 李白 眉毛。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师喜欢月季。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '4');

newTrial('l3_Group_1_Condition_3_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '浩浩和阳阳想给妹妹带一份甜品。浩浩：妹妹应该爱吃蛋糕吗？阳阳：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想吃 蛋糕 来着 ,很久 没 吃了。', a: 'x-x-x 把 朵 雕刻 计较 空洞 x-x-x 呵 吧唧。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想吃蛋糕。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '5');

newTrial('l3_Group_1_Condition_2_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位员工想给老板买一份茶叶。员工A；老板喜欢红茶吗？员工B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 喜欢 红茶 来着 ,叫 我们 带一些。', a: 'x-x-x 丛 块 碗筷 确实 爱好 x-x-x 皇后。 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板喜欢绿茶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '6');

newTrial('l3_Group_1_Condition_1_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给弟弟买一件衬衫。爸爸：弟弟是喜欢灰色还是蓝色？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 喜欢 蓝色 来着 ,因为 灰色 显黑。', a: 'x-x-x 束 件 僵尸 无力 幻象 x-x-x 刺耳 面包。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟喜欢灰色。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '7');

newTrial('l3_Group_1_Condition_4_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '暑假爸爸和妈妈想带小李出去旅游。爸爸：暑假旅游，小李说了什么吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 他 想去 新疆 来着 ,因为 想吃 羊肉。', a: 'x-x-x 朵 双 指南 渠道 公鸡 x-x-x 条目 您说。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想去新疆。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '8');

newTrial('l3_Group_2_Condition_3_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想给弟弟买玩具。姐姐：弟弟是想要拼图吗？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 想要 拼图 来着 ,叫 我们 带一个。', a: 'x-x-x 张 片 科学 分子 空虚 x-x-x 火箭 而且。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟想要积木。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '5');

newTrial('l3_Group_2_Condition_2_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐和笑笑想带约翰逛北京。乐乐：约翰会想去故宫吗？笑笑：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '约翰 说 他 想去 故宫 来着 ,因为 喜欢 建筑。', a: 'x-x-x 篇 朵 账单 人头 课本 x-x-x 问卷 恋爱。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '约翰想去故宫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '6');

newTrial('l3_Group_2_Condition_1_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爷爷想给小华寄一些自种蔬菜。爷爷：小华是喜欢吃萝卜还是番茄？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小华 说 他 想吃 番茄 来着 ,等会 寄一些 回去。', a: 'x-x-x 首 头 火焰 还是 叮当 x-x-x 原子弹 墨子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小华想吃萝卜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '7');

newTrial('l3_Group_2_Condition_4_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '奶奶想买点零食给小明。奶奶：小明刚刚说了什么？爷爷：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 想吃 核桃 来着 ,等会 买 多一些。', a: 'x-x-x 册 颗 居民 羡慕 高山 x-x-x 咚 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明想吃红薯。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '8');

newTrial('l3_Group_3_Condition_3_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈和爸爸在准备小刚明天的早点。妈妈：小刚明早想吃馒头吗？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小刚 说 他 想吃 面条 来着 ,热乎乎 ,很满足。', a: 'x-x-x 副 根 窗户 后果 哗啦 x-x-x 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小刚想吃面条。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '5');

newTrial('l3_Group_3_Condition_2_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在为蕾蕾的派对准备食材。爸爸：蕾蕾想吃汉堡吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '蕾蕾 说 她 想吃 汉堡 来着 ,很久 没 吃了。', a: 'x-x-x 幅 台 帽子 水平 瓷器 x-x-x 嗯 蛋白。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '蕾蕾想吃汉堡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '6');

newTrial('l3_Group_3_Condition_1_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想买点喝的带给小红。姐姐：小红是喜欢喝酸奶还是果汁？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小红 说 她 想喝 果汁 来着 ,夏天 喝 很清爽。', a: 'x-x-x 尾 辆 老鼠 更加 噼啪 x-x-x 噢 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小红想喝酸奶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '7');

newTrial('l3_Group_3_Condition_4_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '组长和助理在商量给客户的礼品。组长：客户说了什么吗？助理：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '客户 说 他 想要 鼠标 来着 ,旧的 坏了。', a: 'x-x-x 瓶 片 绿灯 公理 鼠标 x-x-x 直径。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '客户想要耳机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '8');

newTrial('l3_Group_4_Condition_3_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小祝和小陈在挑选客厅的摆件。小陈：妈妈应该喜欢挂画吧。小祝：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妈妈 说 她 喜欢 花瓶 来着 ,放着 非常 美观。', a: 'x-x-x 罐 篇 偶数 分钟 哼哧 x-x-x 相机 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈喜欢花瓶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '5');

newTrial('l3_Group_4_Condition_2_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给芳芳报舞蹈班。爸爸：芳芳想学街舞吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芳芳 说 她 想学 街舞 来着 ,看着 很酷。', a: 'x-x-x 盒 座 剪刀 兔子 蒸馏 x-x-x 盒子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芳芳想学芭蕾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '6');

newTrial('l3_Group_4_Condition_1_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位老师想送一本书给小张。老师A：小张平时爱读小说还是散文？老师B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 爱读 小说 来着 ,因为 情节 精彩。', a: 'x-x-x 袋 杯 风雪 鳄鱼 眉毛 x-x-x 椰子 孙权。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张爱读小说。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '7');

newTrial('l3_Group_4_Condition_4_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论今晚的饭菜。爸爸：小芳说了什么吗？。妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小芳 说 她 想吃 排骨 来着 ,很久 没 吃了。', a: 'x-x-x 碟 箱 理智 倾诉 抽象 x-x-x 嗯 刺客。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小芳想吃清蒸鱼。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '8');

newTrial('l3_Group_1_Condition_7_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '运动会结束后，老师在聊天。老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 男生 高 ,一眼 就能 看到。', a: 'x-x-x 重复 凭 x-x-x 罢了 热吻。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师说那个男生因为个子高所以容易被看到。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '9');

newTrial('l3_Group_1_Condition_6_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '佳佳在商场买裙子。她问店员：“这两条裙子哪条合适？”店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 黑裙子 很 长 ,没有 小号了。', a: 'x-x-x 高远球 x-x-x 据 x-x-x 量体温。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员认为那条黑裙子不适合佳佳。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '10');

newTrial('l3_Group_1_Condition_5_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '明明和爸爸去游泳。明明问：“这两个泳池哪个更好？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '左边的 水池 深 ,用 右边的。', a: 'x-x-x 开始 凭 x-x-x 洗洁精。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸建议用左边的水池。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '11');

newTrial('l3_Group_1_Condition_8_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师们在商量今年春游的时间。李老师：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周三 天气 很 热 ,不 适合 户外。', a: 'x-x-x 懦弱 x-x-x 由 x-x-x 煞星 飞机。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师说周三很适合户外活动。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '12');

newTrial('l3_Group_2_Condition_7_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '音乐老师在排 班级合唱的队形。助教问：小丽适合站在哪里？老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小丽 个子 矮 ,让 她 站前面。', a: 'x-x-x 时候 泪 x-x-x 呗 瓜子壳。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师觉得小丽应该站在前面。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '9');

newTrial('l3_Group_2_Condition_6_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师在给幼儿园的小朋友讲《龟兔赛跑》的故事。老师问：“跑步的话，乌龟和兔子谁厉害呀？”笑笑说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '乌龟 跑步 很 慢 ,我猜 兔子 赢。', a: 'x-x-x 姨婆 x-x-x 被 x-x-x 侠客 得。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑觉得兔子会赢。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '10');

newTrial('l3_Group_2_Condition_5_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐的生日要到了。妈妈在和乐乐商量生日派对应该放在周五还是周六。乐乐说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周五 放学 晚 ,派对 得要 推迟。', a: 'x-x-x 皇后 趁 x-x-x 李白 大招。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '乐乐觉得周五的派对可以准时开始。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '11');

newTrial('l3_Group_2_Condition_8_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小高和小王在商量要不要周末自驾回老家。小高说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '高速 收费 很 贵 ,要不 国庆 再回。', a: 'x-x-x 孙权 x-x-x 将 x-x-x 橙子 失忆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '高速收费很便宜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '12');

newTrial('l3_Group_3_Condition_7_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '派对上，丽丽请希希帮她端一下自己的橙汁。丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 那杯 满 ,你 小心 别洒了。', a: 'x-x-x 类似 脱 x-x-x 铅笔 后备箱。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽提醒希希小心别把橙汁洒了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '9');

newTrial('l3_Group_3_Condition_6_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工作人员在安排明天会议的座位。工作人员问：“张老师坐第一排还是第二排？”经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '第一排 现在 很 空 ,坐 第一排。', a: 'x-x-x 鳄鱼 x-x-x 据 x-x-x 柠檬水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '经理建议张老师坐第一排。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '10');

newTrial('l3_Group_3_Condition_5_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '清洁工正在打扫卫生。经理问：“哪条路现在可以走？”工人说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这边 地面 湿 ,别走 这里。', a: 'x-x-x 药性 论 x-x-x 卫生。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工人说这条路可以走。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '11');

newTrial('l3_Group_3_Condition_8_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '木工和业主在敲定家具定制细节。业主想知道为什么胡桃木这么贵。木工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '胡桃 木质 很 硬 ,能用 更久呀。', a: 'x-x-x 多云 x-x-x 趁 x-x-x 星期一。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '木工说胡桃木能用得更久。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '12');

newTrial('l3_Group_4_Condition_7_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '张华和销售在讨论小区房子的买卖。张华问：为什么这边房子这么便宜？张华说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '低层 楼房 吵 ,因为 靠近 公路。', a: 'x-x-x 日语 沿 x-x-x 狐狸 教堂。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '低层房子靠近公路，所以比较吵。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '9');

newTrial('l3_Group_4_Condition_6_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '舞蹈比赛快到了。老师问：“这两条裙子哪条更干净？”李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 粉裙子 很 脏 ,选 红的。', a: 'x-x-x 学生卡 x-x-x 依 x-x-x 醒醒。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师在找更干净的裙子。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '10');

newTrial('l3_Group_4_Condition_5_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '宿舍查寝结束后， 辅导员问班长：“哪个寝室不合格？”班长说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '男生 寝室 乱 ,甚至 不如 上个月。', a: 'x-x-x 哪条 把 x-x-x 荒岛 充电器。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '班长说男生寝室不合格。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '11');

newTrial('l3_Group_4_Condition_8_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '长期合作的公司这次没有通过竞标，总裁问经理具体的原因。经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '他们的 方案 很 差 ,完全 没法 落地。', a: 'x-x-x 走了 x-x-x 依 x-x-x 师姐 楼梯。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '长期合作的公司成功通过了竞标。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '12');

newTrial('l3_Group_1_Condition_7_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '医生正在给病人解释检查结果。医生说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '右边的 影像 清楚 ,不用 重新拍。', a: 'x-x-x 难受 回去 x-x-x 美人鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '医生说右边的影像很模糊。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '13');

newTrial('l3_Group_1_Condition_6_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '记者 在整理采访录音。编辑问：“哪段录音能直接用？”记者说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '前面的 录音 很 模糊 ,后面 那段 好些。', a: 'x-x-x 怀念 x-x-x 药水 x-x-x 皇帝 钓鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '记者说前面的录音很清楚。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '14');

newTrial('l3_Group_1_Condition_5_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一个女生 在水果店挑水果。女生问：“草莓和桑葚哪个更新鲜？”老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '今天的 草莓 新鲜 ,上午 刚刚 送到。', a: 'x-x-x 那年 绝情 x-x-x 大象 世界。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板觉得草莓新鲜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '15');

newTrial('l3_Group_1_Condition_8_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小李和朋友聊起单位的同事。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张经理 态度 很 严厉 ,但是 是个 热心肠。', a: 'x-x-x 而已 x-x-x 车厢 x-x-x 熊猫 龙舌兰。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说张经理的态度很温和。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '16');

newTrial('l3_Group_2_Condition_7_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '阿明提醒小琪出门注意安全。导游说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '地铁 二号线 拥挤 ,记得 看好 行李。', a: 'x-x-x 东北虎 绿豆 x-x-x 答案 柠檬。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '阿明说地铁二号线人很多。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '13');

newTrial('l3_Group_2_Condition_6_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小张和小 李在商场试沙发。小张问：“你觉得哪张坐着最好？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 沙发 很 舒服 ,买 这个 吧。', a: 'x-x-x 围绕 x-x-x 佣人 x-x-x 答案 将。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得这个沙发坐着最舒服。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '14');

newTrial('l3_Group_2_Condition_5_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '编辑部 在开专题策划会。小赵问：“我的和张记者的选题都可行吗？主编说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '你的 选题 复杂 ,还是 换一个。', a: 'x-x-x 首都 罪人 x-x-x 湿纸巾。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主编认为小赵的选题更容易操作。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '15');

newTrial('l3_Group_2_Condition_8_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工程师正在汇报测试结果。工程师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 系统 很 稳定 ,暂时 不用 升级。', a: 'x-x-x 环绕 x-x-x 祷告 x-x-x 天敌 绝望。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工程师说系统出了问题。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '16');

newTrial('l3_Group_3_Condition_7_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '张师傅正在提醒厨房的学徒注意安全。张师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 刀片 锋利 ,用的 时候 小心。', a: 'x-x-x 海里 信徒 x-x-x 过敏 泪水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张师傅不让学徒用他的刀。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '13');

newTrial('l3_Group_3_Condition_6_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '游客们 在民宿里选房间。游客问：“哪间房住起来更舒服？”老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '楼下 房间 很 潮湿 ,还是 楼上 更好。', a: 'x-x-x 眷恋 x-x-x 访学 x-x-x 潇洒 天地。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板觉得楼上的房间住起来更舒服。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '14');

newTrial('l3_Group_3_Condition_5_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一 家人在饭店点菜。妈妈问：“这两个汤哪个适合孩子喝？”服务员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '鸡汤 味道 清淡 ,孩子 一定 喜欢。', a: 'x-x-x 再见 恋人 x-x-x 银子 匆匆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '服务员觉得鸡汤适合孩子喝。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '15');

newTrial('l3_Group_3_Condition_8_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演出马上开始了。工作人员问大家准备的怎么样。导演说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 演员 很 紧张 ,现在 还在 深呼吸。', a: 'x-x-x 看见 x-x-x 椭圆 x-x-x 萝卜 长颈鹿。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '演出已经结束了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '16');

newTrial('l3_Group_4_Condition_7_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '聚餐结束后，大家在聊天。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这家 饭店 热闹 ,每天 客人 很多。', a: 'x-x-x 物理 耳机 x-x-x 山脉 篮球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说那家饭店很热闹。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '13');

newTrial('l3_Group_4_Condition_6_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '家长们在给孩子选自习室。妈妈问：“哪个教室更适合学习？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '二楼 教室 很 安静 ,就在 这里。', a: 'x-x-x 海底 x-x-x 汽车 x-x-x 恩怨。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸觉得二楼教室太吵了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '14');

newTrial('l3_Group_4_Condition_5_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '公司讨 论新的报销流程。经理问：“哪个方案更便捷？”员工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '现在的 流程 麻烦 ,还是 以前 方便。', a: 'x-x-x 出现 黄灯 x-x-x 罢了 涨潮。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '员工觉得现在的流程很方便。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '15');

newTrial('l3_Group_4_Condition_8_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '蛋糕店的店员正在向顾客介绍店里的蛋糕。店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这款 样式 很 新颖 ,销量 一直 不错。', a: 'x-x-x 抬头 x-x-x 南瓜 x-x-x 门口 消毒。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员推荐的这款蛋糕样式很普通。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '16');

newTrial('l3_Group_1_Condition_7_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友们正在整理露营装备。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '山里 晚上 冷 ,记得 带上 厚睡袋。', a: 'x-x-x 短剧 将 x-x-x 而已 月饼盒。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '朋友们已经出发去露营了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '17');

newTrial('l3_Group_1_Condition_6_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '几个同学在 水果店试吃李子。小王问：“哪一种更适合直接吃？”店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这种 李子 很 酸 ,不能 直接 吃。', a: 'x-x-x 左手 x-x-x 趁 x-x-x 而已 把。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员认为这种李子不适合直接吃。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '18');

newTrial('l3_Group_1_Condition_5_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '快递 员们在整理包裹。小齐问：“这两个箱子先送哪个？”王师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 箱子 轻 ,你 先送 这个。', a: 'x-x-x 强烈 由 x-x-x 那里 牢骚。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '王师傅说这个箱子很重。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '19');

newTrial('l3_Group_1_Condition_8_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈正在厨房处理鱼。妈妈说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 鲫鱼 很 腥 ,得用 料酒 处理。', a: 'x-x-x 灵光 x-x-x 论 x-x-x 至上 大海。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈说那条鲫鱼有腥味。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '20');

newTrial('l3_Group_2_Condition_7_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈带丽丽来买鞋。丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '红的 这双 松 ,走路 容易 掉。', a: 'x-x-x 入座 沿 x-x-x 馒头 了。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽说红的这双鞋比较松。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '17');

newTrial('l3_Group_2_Condition_6_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友 们在咖啡店聊天。小王问：“最近哪种咖啡销量好？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 新款 很 苦 ,女生 可能 喝不惯。', a: 'x-x-x 小心 x-x-x 把 x-x-x 馒头 羽毛球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说新款咖啡比较甜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '18');

newTrial('l3_Group_2_Condition_5_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '东东一家 在家具城试床垫。妈妈问：“哪张睡着舒服？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 床垫 软 ,老人 不太 适合。', a: 'x-x-x 听说 所 x-x-x 包子 烧麦。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸觉得这个床垫软。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '19');

newTrial('l3_Group_2_Condition_8_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摄影师在向剧组导演介绍拍摄方案。摄影师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '机修 车间 很 旧 ,拍出来 更有 感觉。', a: 'x-x-x 珍惜 x-x-x 按 x-x-x 鸡爪 了。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '摄影师说机修车间很新。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '20');

newTrial('l3_Group_3_Condition_7_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '主管正在评价新员工的表现。主管说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 做事 灵活 ,外联 也 有经验。', a: 'x-x-x 泰国 饺子 x-x-x 喽 榨果汁。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主管说小张做事很死板。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '17');

newTrial('l3_Group_3_Condition_6_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '游客们 准备爬山。小阳问导游：“走哪条路更安全？”导游说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那条 山路 很 危险 ,还是 绕远 一点吧。', a: 'x-x-x 星座 x-x-x 草莓 x-x-x 罢了 榨果汁。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '导游说有条山路比较危险。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '18');

newTrial('l3_Group_3_Condition_5_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一家人在看新房。妈妈问：“哪套更舒服？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 客厅 宽敞 ,孩子 活动 方便。', a: 'x-x-x 心碎 生菜 x-x-x 猪肉 绿豆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸说这个客厅很宽敞。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '19');

newTrial('l3_Group_3_Condition_8_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '教师大会上，年级组长在总结考试情况。李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '三班 成绩 很 糟糕 ,家长们 都很 着急。', a: 'x-x-x 药水 x-x-x 海峡 x-x-x 牛蛙 肉丸。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '家长们不在乎成绩。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '20');

newTrial('l3_Group_4_Condition_7_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '大扫除完，老师来检查教室卫生。老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '第二组 桌椅 整齐 ,大家 向他们 学习。', a: 'x-x-x 绝情 光临 x-x-x 卷心菜 诊所。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '大扫除后老师批评了第二组。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '17');

newTrial('l3_Group_4_Condition_6_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友 们在游乐园聊天。小王问：“哪个项目更过瘾？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '空中 飞毯 很 刺激 ,我们 特别 喜欢。', a: 'x-x-x 粉碎 x-x-x 怜悯 x-x-x 榴莲 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李推荐了空中飞毯。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '18');

newTrial('l3_Group_4_Condition_5_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '航空公司 在测试飞行路线。经理问：“哪条航线体验更好？”飞行员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '南部 航线 平稳 ,乘客 会更 舒服。', a: 'x-x-x 清楚 专辑 x-x-x 匆匆 雕刻。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '飞行员说南部航线比较平稳。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '19');

newTrial('l3_Group_4_Condition_8_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演员们在讨论剧本。演员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '最后 那句 很 别扭 ,观众 可能 听不懂。', a: 'x-x-x 泪水 x-x-x 天赋 x-x-x 手腕 运动鞋。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '演员说最后那句台词很自然。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '20');


// list4: 80 trials

newTrial('l4_Group_1_Condition_4_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '峰峰和磊磊想给小陈带一杯饮料。峰峰：小陈说了什么？磊磊：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小陈 说 她 想喝 咖啡 来着 ,我们 买一杯。', a: 'x-x-x 个 三 定局 看清 烟火 x-x-x 消防栓。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小陈想喝咖啡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '1');

newTrial('l4_Group_1_Condition_3_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '琳琳和彤彤想送只宠物给张华。琳琳：张华喜欢小狗吗？彤彤：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张华 说 他 喜欢 小猫 来着 ,我们 等会 去看。', a: 'x-x-x 汁 岁 根号 透明 与其 x-x-x 菱形 拟人。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张华喜欢小猫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '2');

newTrial('l4_Group_1_Condition_2_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '芬芬爸爸和妈妈在讨论今晚的晚餐。爸爸：芬芬今晚想吃大虾吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芬芬 说 她 想吃 大虾 来着 ,今天 大虾 新鲜。', a: 'x-x-x 条 位 完事 勇气 啦啦 x-x-x 比喻 键盘。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芬芬想吃大虾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '3');

newTrial('l4_Group_1_Condition_1_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和学长在讨论小明的社团。老师：小明是想喜欢网球还是足球社？学长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 喜欢 网球 来着 ,等会 他 会报名。', a: 'x-x-x 件 首 名词 抠门 噗嗤 x-x-x 了 逆命题。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明喜欢足球。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '4');

newTrial('l4_Group_2_Condition_4_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位秘书在讨论老板的行程。秘书A：今早会议老板说了什么？秘书B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 想坐 高铁 来着 ,我们 帮他 订票。', a: 'x-x-x 块 串 得令 空气 拔河 x-x-x 啤酒 奶油。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板想坐高铁。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '1');

newTrial('l4_Group_2_Condition_3_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师和班长在讨论小李的选修课。老师：小李这学期会选物理吗？班长：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 她 会选 数学 来着 ,他 热爱 数学。', a: 'x-x-x 根 件 成败 呼吸 哧溜 x-x-x 森林 光临。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想选物理。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '2');

newTrial('l4_Group_2_Condition_2_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给妹妹报兴趣班。妈妈：妹妹想学钢琴吗？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想学 钢琴 来着 ,因为 小提琴 很难。', a: 'x-x-x 颗 张 法令 彻底 苔藓 x-x-x 含羞草 屋顶。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想学钢琴。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '3');

newTrial('l4_Group_2_Condition_1_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '兰兰和峰峰想买点水果给小彭。兰兰：小彭爱吃苹果还是芒果？峰峰：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彭 说 他 想吃 苹果 来着 ,因为 苹果 很脆。', a: 'x-x-x 粒 架 作罢 剧情 咔嚓 x-x-x 师傅 法师。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彭想吃芒果。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '4');

newTrial('l4_Group_3_Condition_4_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论给小彤的生日礼物。爸爸：小彤今早说了什么？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小彤 说 她 想要 相机 来着 ,因为 想学 摄影。', a: 'x-x-x 片 辆 句式 体现 喷嚏 x-x-x 公式 圆圈。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小彤想要相机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '1');

newTrial('l4_Group_3_Condition_3_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '教练和领队在讨论小张的训练计划。教练：小张想学游泳吗？领队：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 想学 长跑 来着 ,因为 喜欢 跑步。', a: 'x-x-x 勺 栋 头发 继续 朵朵 x-x-x 嫦娥 液体。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张想学长跑。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '2');

newTrial('l4_Group_3_Condition_2_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给森森报外语兴趣班。爸爸：森森会想学法语吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '森森 说 她 想学 法语 来着 ,因为 喜欢 法国。', a: 'x-x-x 桌 次 公交 沙漠 下雨 x-x-x 小乔 如何。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '森森想学德语。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '3');

newTrial('l4_Group_3_Condition_1_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摊主和熟客在讨论孩子的口味。摊主：你家孩子是爱吃菠菜还是芹菜？熟客：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '孩子 说 他 想吃 菠菜 来着 ,因为 营养 丰富。', a: 'x-x-x 椅 此 月亮 彩虹 颗粒 x-x-x 三国 大鹅。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '孩子想吃菠菜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '4');

newTrial('l4_Group_4_Condition_4_S01',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给笑笑报美术兴趣班。爸爸：笑笑刚刚说了什么？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '笑笑 说 她 想学 油画 来着 ,因为 色彩 丰富。', a: 'x-x-x 辆 呵 山峰 莲藕 丑陋 x-x-x 哪吒 皮肤。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑想学素描。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '1');

newTrial('l4_Group_4_Condition_3_S02',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '设计师在向助手确认业主的方案。设计师：业主喜欢中式装修吗？助手：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '业主 说 他 喜欢 中式 来着 ,因为 简洁 大方。', a: 'x-x-x 艘 种 呵呵 身边 喉咙 x-x-x 太子 奇数。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '业主喜欢中式装修。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '2');

newTrial('l4_Group_4_Condition_2_S03',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '文文和欣欣准备给小娟买点水果。文文：小娟爱吃苹果吗？欣欣：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小娟 说 她 爱吃 苹果 来着 ,因为 清甜 可口。', a: 'x-x-x 串 杯 琴弦 高峰 虚伪 x-x-x 妲己 射手。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小娟爱吃香蕉。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '3');

newTrial('l4_Group_4_Condition_1_S04',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '师姐和师妹想给老师买束鲜花。师妹：老师是喜欢玫瑰还是月季？师姐：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老师 说 她 喜欢 玫瑰 来着 ,因为 非常 浪漫。', a: 'x-x-x 碟 支 破损 章节 虚浮 x-x-x 李白 眉毛。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师喜欢月季。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '4');

newTrial('l4_Group_1_Condition_4_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '浩浩和阳阳想给妹妹带一份甜品。浩浩：妹妹出门时说了什么？阳阳：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妹妹 说 她 想吃 蛋糕 来着 ,很久 没 吃了。', a: 'x-x-x 把 朵 雕刻 计较 饺子 x-x-x 呵 吧唧。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妹妹想吃蛋糕。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '4')
.log('item', '5');

newTrial('l4_Group_1_Condition_3_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位员工想给老板买一份茶叶。员工A；老板喜欢绿茶吗？员工B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '老板 说 他 喜欢 红茶 来着 ,叫 我们 带一些。', a: 'x-x-x 丛 块 碗筷 确实 浮华 x-x-x 皇后。 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板喜欢绿茶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '3')
.log('item', '6');

newTrial('l4_Group_1_Condition_2_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给弟弟买一件衬衫。爸爸：弟弟喜欢蓝色吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 喜欢 蓝色 来着 ,因为 灰色 显黑。', a: 'x-x-x 束 件 僵尸 无力 猴子 x-x-x 刺耳 面包。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟喜欢灰色。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '2')
.log('item', '7');

newTrial('l4_Group_1_Condition_1_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '暑假爸爸和妈妈想带小李出去旅游。爸爸：小李是想去新疆还是想去四川呢？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小李 说 他 想去 新疆 来着 ,因为 想吃 羊肉。', a: 'x-x-x 朵 双 指南 渠道 纷飞 x-x-x 条目 您说。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李想去新疆。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '1')
.log('item', '8');

newTrial('l4_Group_2_Condition_4_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想给弟弟买玩具。姐姐：弟弟出门时说了什么？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '弟弟 说 他 想要 拼图 来着 ,叫 我们 带一个。', a: 'x-x-x 张 片 科学 分子 牛奶 x-x-x 火箭 而且。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '弟弟想要积木。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '4')
.log('item', '5');

newTrial('l4_Group_2_Condition_3_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐和笑笑想带约翰逛北京。乐乐：约翰会想去长城吗？笑笑：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '约翰 说 他 想去 故宫 来着 ,因为 喜欢 建筑。', a: 'x-x-x 篇 朵 账单 人头 课本 x-x-x 问卷 恋爱。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '约翰想去故宫。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '3')
.log('item', '6');

newTrial('l4_Group_2_Condition_2_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爷爷想给小华寄一些自种蔬菜。爷爷：小华喜欢吃番茄吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小华 说 他 想吃 番茄 来着 ,等会 寄一些 回去。', a: 'x-x-x 首 头 火焰 还是 水流 x-x-x 原子弹 墨子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小华想吃萝卜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '2')
.log('item', '7');

newTrial('l4_Group_2_Condition_1_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '奶奶想买点零食给小明。奶奶：小明想吃核桃还是红薯？爷爷：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小明 说 他 想吃 核桃 来着 ,等会 买 多一些。', a: 'x-x-x 册 颗 居民 羡慕 扑通 x-x-x 咚 出租车。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小明想吃红薯。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '1')
.log('item', '8');

newTrial('l4_Group_3_Condition_4_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈和爸爸在准备小刚明天的早点。妈妈：小刚刚才说了什么吗？爸爸：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小刚 说 他 想吃 面条 来着 ,热乎乎 ,很满足。', a: 'x-x-x 副 根 窗户 后果 琵琶 x-x-x 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小刚想吃面条。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '4')
.log('item', '5');

newTrial('l4_Group_3_Condition_3_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在为蕾蕾的派对准备食材。爸爸：蕾蕾想吃披萨吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '蕾蕾 说 她 想吃 汉堡 来着 ,很久 没 吃了。', a: 'x-x-x 幅 台 帽子 水平 瓷器 x-x-x 嗯 蛋白。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '蕾蕾想吃汉堡。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '3')
.log('item', '6');

newTrial('l4_Group_3_Condition_2_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '姐姐和哥哥想买点喝的带给小红。姐姐：小红爱喝果汁吗？哥哥：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小红 说 她 想喝 果汁 来着 ,夏天 喝 很清爽。', a: 'x-x-x 尾 辆 老鼠 更加 噼啪 x-x-x 噢 洗衣液。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小红想喝酸奶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '2')
.log('item', '7');

newTrial('l4_Group_3_Condition_1_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '组长和助理在商量给客户的礼品。组长：客户是喜欢鼠标还是耳机？助理：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '客户 说 他 想要 鼠标 来着 ,旧的 坏了。', a: 'x-x-x 瓶 片 绿灯 公理 鼠标 x-x-x 直径。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '客户想要耳机。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '1')
.log('item', '8');

newTrial('l4_Group_4_Condition_4_S05',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小祝和小陈在挑选客厅的摆件。小陈：妈妈有什么建议吗？小祝：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '妈妈 说 她 喜欢 花瓶 来着 ,放着 非常 美观。', a: 'x-x-x 罐 篇 偶数 分钟 哼哧 x-x-x 相机 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '妈妈喜欢花瓶。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '4')
.log('item', '5');

newTrial('l4_Group_4_Condition_3_S06',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈想给芳芳报舞蹈班。爸爸：芳芳想学芭蕾吗？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '芳芳 说 她 想学 街舞 来着 ,看着 很酷。', a: 'x-x-x 盒 座 剪刀 兔子 蒸馏 x-x-x 盒子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '芳芳想学芭蕾。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '3')
.log('item', '6');

newTrial('l4_Group_4_Condition_2_S07',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '两位老师想送一本书给小张。老师A：小张平时爱读小说吗？老师B：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 说 他 爱读 小说 来着 ,因为 情节 精彩。', a: 'x-x-x 袋 杯 风雪 鳄鱼 眉毛 x-x-x 椰子 孙权。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小张爱读小说。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '2')
.log('item', '7');

newTrial('l4_Group_4_Condition_1_S08',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '爸爸和妈妈在讨论今晚的饭菜。爸爸：小芳是喜欢吃排骨还是清蒸鱼？妈妈：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小芳 说 她 想吃 排骨 来着 ,很久 没 吃了。', a: 'x-x-x 碟 箱 理智 倾诉 抽象 x-x-x 嗯 刺客。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小芳想吃清蒸鱼。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '1')
.log('item', '8');

newTrial('l4_Group_1_Condition_8_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '运动会结束后，老师在聊天。老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 男生 很 高 ,一眼 就能 看到。', a: 'x-x-x 重复 x-x-x 凭 x-x-x 罢了 热吻。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师说那个男生因为个子高所以容易被看到。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '9');

newTrial('l4_Group_1_Condition_7_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '服装店今年的新款销量不太好。老板想知道原因。店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 黑裙子 长 ,容易 踩到。', a: 'x-x-x 高远球 据 x-x-x 体温。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员觉得裙子太长是个问题。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '10');

newTrial('l4_Group_1_Condition_6_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '明明和爸爸去游泳。明明问：“这两个泳池哪个更好？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '左边的 水池 很 深 ,用 右边的。', a: 'x-x-x 开始 x-x-x 凭 x-x-x 洗洁精。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸建议用左边的水池。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '11');

newTrial('l4_Group_1_Condition_5_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师们在商量今年春游的时间。张老师问：这周三合适还是周五合适？李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周三 天气 热 ,还是 周五 吧。', a: 'x-x-x 懦弱 由 x-x-x 而已 将。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师认为周五比周三更适合春游。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '12');

newTrial('l4_Group_2_Condition_8_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '音乐老师在排 班级合唱的队形。助教问：小丽适合站在哪里？老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小丽 个子 很 矮 ,让 她 站前面。', a: 'x-x-x 时候 x-x-x 泪 x-x-x 呗 瓜子壳。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老师觉得小丽应该站在前面。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '9');

newTrial('l4_Group_2_Condition_7_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '笑笑养了一只小乌龟。她给好朋友妙妙介绍小乌龟的习性。笑笑说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '乌龟 跑步 慢 ,胆子 也 不大。', a: 'x-x-x 姨婆 被 x-x-x 喽 马路。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '笑笑说乌龟胆子很大。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '10');

newTrial('l4_Group_2_Condition_6_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '乐乐的生日要到了。妈妈在和乐乐商量生日派对应该放在周五还是周六。乐乐说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '周五 放学 很 晚 ,派对 得要 推迟。', a: 'x-x-x 皇后 x-x-x 趁 x-x-x 李白 大招。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '乐乐觉得周五的派对可以准时开始。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '11');

newTrial('l4_Group_2_Condition_5_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小高和小王打算暑假自驾回老家。他们在商量走高速和国道哪个更划算。小高说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '高速 收费 贵 ,但是 不 绕路。', a: 'x-x-x 孙权 将 x-x-x 吧 妲己。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小高和小王准备自驾回老家。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '12');

newTrial('l4_Group_3_Condition_8_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '派对上，丽丽请希希帮她端一下自己的橙汁。丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 那杯 很 满 ,你 小心 别洒了。', a: 'x-x-x 类似 x-x-x 脱 x-x-x 铅笔 后备箱。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽提醒希希小心别把橙汁洒了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '9');

newTrial('l4_Group_3_Condition_7_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演出快开始了。经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这一排 现在 空 还能 ,进人。', a: 'x-x-x 鳄鱼 按 x-x-x 卫星。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '经理说这一排已经坐满了人。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '10');

newTrial('l4_Group_3_Condition_6_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '清洁工正在打扫卫生。经理问：“哪条路现在可以走？”工人说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这边 地面 很 湿 ,别走 这里。', a: 'x-x-x 药性 x-x-x 论 x-x-x 卫生。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工人说这条路可以走。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '11');

newTrial('l4_Group_3_Condition_5_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '木工和业主在敲定家具定制细节。业主问：“桌板选松木还是胡桃？”木工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '胡桃 木质 硬 ,还是 胡桃木。', a: 'x-x-x 多云 趁 x-x-x 星期一。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '木工建议选松木做桌板。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '12');

newTrial('l4_Group_4_Condition_8_S09',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '张华和销售在讨论小区房子的买卖。张华问：为什么这边房子这么便宜？张华说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '低层 楼房 很 吵 ,因为 靠近 公路。', a: 'x-x-x 日语 x-x-x 沿 x-x-x 狐狸 教堂。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '低层房子靠近公路，所以比较吵。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '9');

newTrial('l4_Group_4_Condition_7_S10',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '比赛结束后，老师们在整理道具。李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 粉裙子 脏 ,别要了。', a: 'x-x-x 学生卡 由 x-x-x'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师说那条粉裙子很干净。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '10');

newTrial('l4_Group_4_Condition_6_S11',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '宿舍查寝结束后， 辅导员问班长：“哪个寝室不合格？”班长说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '男生 寝室 很 乱 ,甚至 不如 上个月。', a: 'x-x-x 哪条 x-x-x 把 x-x-x 荒岛 充电器。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '班长说男生寝室不合格。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '11');

newTrial('l4_Group_4_Condition_5_S12',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '公司开会讨论竞标方案。总裁问：“咱们和对手的方案哪个更可行？”经理说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '他们的 方案 差 ,完全 没法 落地。', a: 'x-x-x 走了 依 x-x-x 师姐 楼梯。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '经理认为对手的方案很好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '12');

newTrial('l4_Group_1_Condition_8_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '医生正在给病人解释检查结果。医生说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '右边的 影像 很 清楚 ,不用 重新拍。', a: 'x-x-x 难受 x-x-x 回去 x-x-x 美人鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '医生说右边的影像很模糊。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '13');

newTrial('l4_Group_1_Condition_7_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '记者正在整理采访素材。记者说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '前面的 录音 模糊 ,可能 还得 重录。', a: 'x-x-x 怀念 药水 x-x-x 皇帝 钓鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '记者觉得前面的录音不够清晰。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '14');

newTrial('l4_Group_1_Condition_6_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一个女生 在水果店挑水果。女生问：“草莓和桑葚哪个更新鲜？”老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '今天的 草莓 很 新鲜 ,上午 刚刚 送到。', a: 'x-x-x 那年 x-x-x 绝情 x-x-x 大象 世界。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板觉得草莓新鲜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '15');

newTrial('l4_Group_1_Condition_5_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '实习生们在讨 论三位带队老师。小王问：“你们觉得谁最不好相处？”小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '张经理 态度 严厉 ,我 害怕 他。', a: 'x-x-x 而已 车厢 x-x-x 后羿 穿。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得张经理最不好相处。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '16');

newTrial('l4_Group_2_Condition_8_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '阿明提醒小琪出门注意安全。导游说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '地铁 二号线 很 拥挤 ,记得 看好 行李。', a: 'x-x-x 东北虎 x-x-x 绿豆 x-x-x 答案 柠檬。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '阿明说地铁二号线人很多。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '13');

newTrial('l4_Group_2_Condition_7_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小张刚搬进新家，邀请小李来作客。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 沙发 舒服 ,坐久 也 不累。', a: 'x-x-x 围绕 佣人 x-x-x 把 鼠标。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说那个沙发不舒服。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '14');

newTrial('l4_Group_2_Condition_6_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '编辑部 在开专题策划会。小赵问：“我的和张记者的选题都可行吗？主编说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '你的 选题 很 复杂 ,还是 换一个。', a: 'x-x-x 首都 x-x-x 罪人 x-x-x 湿纸巾。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主编认为小赵的选题更容易操作。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '15');

newTrial('l4_Group_2_Condition_5_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '工程师 在测试网络系统。经理问：“哪个服务器更可靠？”工程师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 系统 稳定 ,先用 这一套。', a: 'x-x-x 环绕 祷告 x-x-x 晾衣杆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '工程师说这个系统很可靠。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '16');

newTrial('l4_Group_3_Condition_8_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '张师傅正在提醒厨房的学徒注意安全。张师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '我的 刀片 很 锋利 ,用的 时候 小心。', a: 'x-x-x 海里 x-x-x 信徒 x-x-x 呗 泪水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '张师傅不让学徒用他的刀。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '13');

newTrial('l4_Group_3_Condition_7_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '游客问老板为什么不能选楼下的房间。老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '楼下 房间 潮湿 ,最近 总在 下雨。', a: 'x-x-x 眷恋 访学 x-x-x 潇洒 天地。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板说楼下的房间太潮湿了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '14');

newTrial('l4_Group_3_Condition_6_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一 家人在饭店点菜。妈妈问：“这两个汤哪个适合孩子喝？”服务员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '鸡汤 味道 很 清淡 ,孩子 一定 喜欢。', a: 'x-x-x 再见 x-x-x 恋人 x-x-x 银子 匆匆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '服务员觉得鸡汤适合孩子喝。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '15');

newTrial('l4_Group_3_Condition_5_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '拍摄进度 很慢。工作人员问导演：“今天谁状态不太好？”导演说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那个 演员 紧张 ,刚才 一直 忘词。', a: 'x-x-x 看见 椭圆 x-x-x 萝卜 鲸鱼。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '导演说那个演员状态不太好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '16');

newTrial('l4_Group_4_Condition_8_S13',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '聚餐结束后，大家在聊天。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这家 饭店 很 热闹 ,每天 客人 很多。', a: 'x-x-x 物理 x-x-x 耳机 x-x-x 山脉 篮球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李说那家饭店很热闹。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '13');

newTrial('l4_Group_4_Condition_7_S14',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '孩子正在准备考试。爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '二楼 教室 安静 ,适合 复习。', a: 'x-x-x 海底 汽车 x-x-x 恩怨。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸说二楼教室很安静。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '14');

newTrial('l4_Group_4_Condition_6_S15',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '公司讨 论新的报销流程。经理问：“哪个方案更便捷？”员工说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '现在的 流程 很 麻烦 ,还是 以前 方便。', a: 'x-x-x 出现 x-x-x 黄灯 x-x-x 罢了 涨潮。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '员工觉得现在的流程很方便。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '15');

newTrial('l4_Group_4_Condition_5_S16',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '顾客 正在挑生日蛋糕。顾客问：“这两款哪个卖得好？”店员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这款 样式 新颖 ,老年人 可能 不喜欢。', a: 'x-x-x 抬头 南瓜 x-x-x 门口 消毒水。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '店员推荐这款蛋糕因为样式新颖。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '16');

newTrial('l4_Group_1_Condition_8_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '朋友们正在整理露营装备。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '山里 晚上 很 冷 ,记得 带上 厚睡袋。', a: 'x-x-x 短剧 x-x-x 将 x-x-x 而已 月饼盒。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '朋友们已经出发去露营了。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '8')
.log('item', '17');

newTrial('l4_Group_1_Condition_7_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '几个同学买完水果回宿舍。小王说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这种 李子 酸 ,我得 配点 蜂蜜。', a: 'x-x-x 左手 趁 x-x-x 那里 牢骚。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小王说这种李子很甜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '7')
.log('item', '18');

newTrial('l4_Group_1_Condition_6_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '快递 员们在整理包裹。小齐问：“这两个箱子先送哪个？”王师傅说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 箱子 很 轻 ,你 先送 这个。', a: 'x-x-x 强烈 x-x-x 由 x-x-x 那里 牢骚。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '王师傅说这个箱子很重。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '6')
.log('item', '19');

newTrial('l4_Group_1_Condition_5_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一家人在市场挑鱼。妈妈问：“哪条更新鲜？”老板说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这条 鲫鱼 腥 ,旁边 那条 好些。', a: 'x-x-x 灵光 论 x-x-x 空白 数字。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '老板觉得那条鲫鱼更新鲜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '1')
.log('condition', '5')
.log('item', '20');

newTrial('l4_Group_2_Condition_8_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '妈妈带丽丽来买鞋。丽丽说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '红的 这双 很 松 ,走路 容易 掉。', a: 'x-x-x 入座 x-x-x 沿 x-x-x 馒头 了。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '丽丽说红的这双鞋比较松。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '8')
.log('item', '17');

newTrial('l4_Group_2_Condition_7_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小李再向顾客介绍店里的咖啡。小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 新款 苦 ,女生 可能 喝不惯。', a: 'x-x-x 小心 把 x-x-x 馒头 羽毛球。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李向顾客介绍这款咖啡味道很甜。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '7')
.log('item', '18');

newTrial('l4_Group_2_Condition_6_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '东东一家 在家具城试床垫。妈妈问：“哪张睡着舒服？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 床垫 很 软 ,老人 不太 适合。', a: 'x-x-x 听说 x-x-x 所 x-x-x 包子 烧麦。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸觉得这个床垫软。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '6')
.log('item', '19');

newTrial('l4_Group_2_Condition_5_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '摄影 组在挑拍摄场地。导演问：“哪个车间更适合？”摄影师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '机修 车间 旧 ,拍出来 更有 感觉。', a: 'x-x-x 珍惜 按 x-x-x 鸡爪 了。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '摄影师觉得机修车间不适合拍摄。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '2')
.log('condition', '5')
.log('item', '20');

newTrial('l4_Group_3_Condition_8_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '主管正在评价新员工的表现。主管说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '小张 做事 很 灵活 ,外联 也 有经验。', a: 'x-x-x 泰国 x-x-x 饺子 x-x-x 喽 榨果汁。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '主管说小张做事很死板。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '8')
.log('item', '17');

newTrial('l4_Group_3_Condition_7_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '自由活动前，导游正在提醒游客注意事项。导游说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '那条 山路 危险 ,不要 一个人 过去。', a: 'x-x-x 星座 草莓 x-x-x 月饼盒 绿豆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '导游说所有的路都很安全。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '7')
.log('item', '18');

newTrial('l4_Group_3_Condition_6_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '一家人在看新房。妈妈问：“哪套更舒服？”爸爸说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '这个 客厅 很 宽敞 ,孩子 活动 方便。', a: 'x-x-x 心碎 x-x-x 生菜 x-x-x 猪肉 绿豆。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '爸爸说这个客厅很宽敞。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '6')
.log('item', '19');

newTrial('l4_Group_3_Condition_5_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '老师们讨 论考试成绩。年级组长问：“哪个班表现得不好？”李老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '三班 成绩 糟糕 ,平均分 最低。', a: 'x-x-x 药水 海峡 x-x-x 曹操。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '李老师说三班的成绩不太好。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '3')
.log('condition', '5')
.log('item', '20');

newTrial('l4_Group_4_Condition_8_S17',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '大扫除完，老师来检查教室卫生。老师说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '第二组 桌椅 很 整齐 ,大家 向他们 学习。', a: 'x-x-x 绝情 x-x-x 光临 x-x-x 卷心菜 诊所。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '大扫除后老师批评了第二组。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '8')
.log('item', '17');

newTrial('l4_Group_4_Condition_7_S18',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '小李和朋友去了新开的游乐场。妹妹问他游乐场好玩吗？小李说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '空中 飞毯 刺激 ,我们 特别 喜欢。', a: 'x-x-x 粉碎 怜悯 x-x-x 榴莲 袋子。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '小李觉得空中飞毯一点也不刺激。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '7')
.log('item', '18');

newTrial('l4_Group_4_Condition_6_S19',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '航空公司 在测试飞行路线。经理问：“哪条航线体验更好？”飞行员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '南部 航线 很 平稳 ,乘客 会更 舒服。', a: 'x-x-x 清楚 x-x-x 专辑 x-x-x 匆匆 雕刻。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '飞行员说南部航线比较平稳。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '6')
.log('item', '19');

newTrial('l4_Group_4_Condition_5_S20',
    newController('Message', {
        html: "<div style='max-width:700px;margin:0 auto;font-size:1.1em;line-height:1.8;'>" +
              '演 员们在排练话剧。导演问：“哪句台词需要改？”演员说：____________________。<br>  <br>点击下方链接开始造句。' +
              "</div>"
    })
        .print()
        .wait()
    ,
    newController('Maze', {s: '最后 那句 别扭 ,而且 不太 连贯。', a: 'x-x-x 泪水 天赋 x-x-x 手腕 树叶。'})
        .css('font-size', '1.8em')
        .css('font-family', "Arial, 'Microsoft YaHei', 'PingFang SC', sans-serif")
        .print()
        .log()
        .wait()
        .remove()
    ,
    newTimer(400).start().wait()
    ,
    newController('Question', {
        q: "<div style='font-size:1.15em;text-align:center;'>" + '演员觉得最后那句台词需要修改。' + "</div>",
        as: ['F  错', 'J  对']
    })
        .print()
        .log()
        .wait()
)
.log('group', '4')
.log('condition', '5')
.log('item', '20');


newTrial('welcome',
    newController('Message', {html: "<div style='text-align:center;max-width:700px;margin:0 auto;'>" + "<h1>造句实验</h1>" + "<hr>" + "<p>欢迎参加本次实验！</p>" + "<p>您将看到一些 <strong>对话场景</strong>，然后需要 <strong>逐词补全句子</strong>。</p>" + "<p>屏幕上左右两边会出现两个词，请选出 <strong>正确的一个</strong>。</p>" + "<p>完成后需要回答一个 <strong>阅读理解题</strong>。</p>" + "<hr>" + "<p style='color:#888;'>共 96 个句子 · 约 25-30 分钟</p>" + "<hr>" + "<p>按 <strong>空格键</strong> 开始</p>" + "</div>"})
    .print()
    ,
    newKey('space', ' ').wait()
);

newTrial('instructions',
    newController('Message', {html: "<div style='max-width:700px;margin:0 auto;font-size:1.15em;'>" + "<h2>操作说明</h2>" + "<hr>" + "<ol>" + "<li><strong>阅读场景</strong></li>" + "<li><strong>逐词造句</strong> — 按 <kbd>E</kbd> 选左边，按 <kbd>I</kbd> 选右边。</li>" + "<li><strong>回答问题</strong> — 按 <kbd>F</kbd>(错) 或 <kbd>J</kbd>(对)。</li>" + "</ol>" + "<hr>" + "<p>按 <strong>空格键</strong> 进入练习</p>" + "</div>"})
    .print()
    ,
    newKey('space', ' ').wait()
);

newTrial('break',
    newController('Message', {html: "<div style='text-align:center;max-width:600px;margin:0 auto;'>" + "<h2>休息一下 ☕</h2>" + "<hr>" + "<p>练习结束，辛苦了！</p>" + "<p>准备好了再开始正式实验。</p>" + "<hr>" + "<p>按 <strong>空格键</strong> 继续</p>" + "</div>"})
    .print()
    ,
    newKey('space', ' ').wait()
);

newTrial('debriefing',
    newController('Message', {html: "<div style='text-align:center;max-width:600px;margin:0 auto;font-size:1.1em;'>" + "<h2>实验结束</h2>" + "<hr>" + "<p>感谢您的参与！</p>" + "<hr>" + "<p style='color:#999;'>您可以关闭此页面了。</p>" + "</div>"})
    .print()
    .wait()
);

Sequence(
    'welcome',
    'instructions',
    randomize('p_Group_1_Condition_1_S01', 'p_Group_1_Condition_4_S02', 'p_Group_1_Condition_3_S03', 'p_Group_1_Condition_2_S04', 'p_Group_1_Condition_1_S05', 'p_Group_1_Condition_4_S06', 'p_Group_1_Condition_3_S07', 'p_Group_1_Condition_2_S08', 'p_Group_1_Condition_5_S09', 'p_Group_1_Condition_5_S10', 'p_Group_1_Condition_5_S11', 'p_Group_1_Condition_5_S12', 'p_Group_1_Condition_5_S13', 'p_Group_1_Condition_5_S14', 'p_Group_1_Condition_5_S15', 'p_Group_1_Condition_5_S16'),
    'break',
    PennCounterBalance(4,
        randomize('l1_Group_1_Condition_1_S01', 'l1_Group_1_Condition_4_S02', 'l1_Group_1_Condition_3_S03', 'l1_Group_1_Condition_2_S04', 'l1_Group_2_Condition_1_S01', 'l1_Group_2_Condition_4_S02', 'l1_Group_2_Condition_3_S03', 'l1_Group_2_Condition_2_S04', 'l1_Group_3_Condition_1_S01', 'l1_Group_3_Condition_4_S02', 'l1_Group_3_Condition_3_S03', 'l1_Group_3_Condition_2_S04', 'l1_Group_4_Condition_1_S01', 'l1_Group_4_Condition_4_S02', 'l1_Group_4_Condition_3_S03', 'l1_Group_4_Condition_2_S04', 'l1_Group_1_Condition_1_S05', 'l1_Group_1_Condition_4_S06', 'l1_Group_1_Condition_3_S07', 'l1_Group_1_Condition_2_S08', 'l1_Group_2_Condition_1_S05', 'l1_Group_2_Condition_4_S06', 'l1_Group_2_Condition_3_S07', 'l1_Group_2_Condition_2_S08', 'l1_Group_3_Condition_1_S05', 'l1_Group_3_Condition_4_S06', 'l1_Group_3_Condition_3_S07', 'l1_Group_3_Condition_2_S08', 'l1_Group_4_Condition_1_S05', 'l1_Group_4_Condition_4_S06', 'l1_Group_4_Condition_3_S07', 'l1_Group_4_Condition_2_S08', 'l1_Group_1_Condition_5_S09', 'l1_Group_1_Condition_8_S10', 'l1_Group_1_Condition_7_S11', 'l1_Group_1_Condition_6_S12', 'l1_Group_2_Condition_5_S09', 'l1_Group_2_Condition_8_S10', 'l1_Group_2_Condition_7_S11', 'l1_Group_2_Condition_6_S12', 'l1_Group_3_Condition_5_S09', 'l1_Group_3_Condition_8_S10', 'l1_Group_3_Condition_7_S11', 'l1_Group_3_Condition_6_S12', 'l1_Group_4_Condition_5_S09', 'l1_Group_4_Condition_8_S10', 'l1_Group_4_Condition_7_S11', 'l1_Group_4_Condition_6_S12', 'l1_Group_1_Condition_5_S13', 'l1_Group_1_Condition_8_S14', 'l1_Group_1_Condition_7_S15', 'l1_Group_1_Condition_6_S16', 'l1_Group_2_Condition_5_S13', 'l1_Group_2_Condition_8_S14', 'l1_Group_2_Condition_7_S15', 'l1_Group_2_Condition_6_S16', 'l1_Group_3_Condition_5_S13', 'l1_Group_3_Condition_8_S14', 'l1_Group_3_Condition_7_S15', 'l1_Group_3_Condition_6_S16', 'l1_Group_4_Condition_5_S13', 'l1_Group_4_Condition_8_S14', 'l1_Group_4_Condition_7_S15', 'l1_Group_4_Condition_6_S16', 'l1_Group_1_Condition_5_S17', 'l1_Group_1_Condition_8_S18', 'l1_Group_1_Condition_7_S19', 'l1_Group_1_Condition_6_S20', 'l1_Group_2_Condition_5_S17', 'l1_Group_2_Condition_8_S18', 'l1_Group_2_Condition_7_S19', 'l1_Group_2_Condition_6_S20', 'l1_Group_3_Condition_5_S17', 'l1_Group_3_Condition_8_S18', 'l1_Group_3_Condition_7_S19', 'l1_Group_3_Condition_6_S20', 'l1_Group_4_Condition_5_S17', 'l1_Group_4_Condition_8_S18', 'l1_Group_4_Condition_7_S19', 'l1_Group_4_Condition_6_S20'),
        randomize('l2_Group_1_Condition_2_S01', 'l2_Group_1_Condition_1_S02', 'l2_Group_1_Condition_4_S03', 'l2_Group_1_Condition_3_S04', 'l2_Group_2_Condition_2_S01', 'l2_Group_2_Condition_1_S02', 'l2_Group_2_Condition_4_S03', 'l2_Group_2_Condition_3_S04', 'l2_Group_3_Condition_2_S01', 'l2_Group_3_Condition_1_S02', 'l2_Group_3_Condition_4_S03', 'l2_Group_3_Condition_3_S04', 'l2_Group_4_Condition_2_S01', 'l2_Group_4_Condition_1_S02', 'l2_Group_4_Condition_4_S03', 'l2_Group_4_Condition_3_S04', 'l2_Group_1_Condition_2_S05', 'l2_Group_1_Condition_1_S06', 'l2_Group_1_Condition_4_S07', 'l2_Group_1_Condition_3_S08', 'l2_Group_2_Condition_2_S05', 'l2_Group_2_Condition_1_S06', 'l2_Group_2_Condition_4_S07', 'l2_Group_2_Condition_3_S08', 'l2_Group_3_Condition_2_S05', 'l2_Group_3_Condition_1_S06', 'l2_Group_3_Condition_4_S07', 'l2_Group_3_Condition_3_S08', 'l2_Group_4_Condition_2_S05', 'l2_Group_4_Condition_1_S06', 'l2_Group_4_Condition_4_S07', 'l2_Group_4_Condition_3_S08', 'l2_Group_1_Condition_6_S09', 'l2_Group_1_Condition_5_S10', 'l2_Group_1_Condition_8_S11', 'l2_Group_1_Condition_7_S12', 'l2_Group_2_Condition_6_S09', 'l2_Group_2_Condition_5_S10', 'l2_Group_2_Condition_8_S11', 'l2_Group_2_Condition_7_S12', 'l2_Group_3_Condition_6_S09', 'l2_Group_3_Condition_5_S10', 'l2_Group_3_Condition_8_S11', 'l2_Group_3_Condition_7_S12', 'l2_Group_4_Condition_6_S09', 'l2_Group_4_Condition_5_S10', 'l2_Group_4_Condition_8_S11', 'l2_Group_4_Condition_7_S12', 'l2_Group_1_Condition_6_S13', 'l2_Group_1_Condition_5_S14', 'l2_Group_1_Condition_8_S15', 'l2_Group_1_Condition_7_S16', 'l2_Group_2_Condition_6_S13', 'l2_Group_2_Condition_5_S14', 'l2_Group_2_Condition_8_S15', 'l2_Group_2_Condition_7_S16', 'l2_Group_3_Condition_6_S13', 'l2_Group_3_Condition_5_S14', 'l2_Group_3_Condition_8_S15', 'l2_Group_3_Condition_7_S16', 'l2_Group_4_Condition_6_S13', 'l2_Group_4_Condition_5_S14', 'l2_Group_4_Condition_8_S15', 'l2_Group_4_Condition_7_S16', 'l2_Group_1_Condition_6_S17', 'l2_Group_1_Condition_5_S18', 'l2_Group_1_Condition_8_S19', 'l2_Group_1_Condition_7_S20', 'l2_Group_2_Condition_6_S17', 'l2_Group_2_Condition_5_S18', 'l2_Group_2_Condition_8_S19', 'l2_Group_2_Condition_7_S20', 'l2_Group_3_Condition_6_S17', 'l2_Group_3_Condition_5_S18', 'l2_Group_3_Condition_8_S19', 'l2_Group_3_Condition_7_S20', 'l2_Group_4_Condition_6_S17', 'l2_Group_4_Condition_5_S18', 'l2_Group_4_Condition_8_S19', 'l2_Group_4_Condition_7_S20'),
        randomize('l3_Group_1_Condition_3_S01', 'l3_Group_1_Condition_2_S02', 'l3_Group_1_Condition_1_S03', 'l3_Group_1_Condition_4_S04', 'l3_Group_2_Condition_3_S01', 'l3_Group_2_Condition_2_S02', 'l3_Group_2_Condition_1_S03', 'l3_Group_2_Condition_4_S04', 'l3_Group_3_Condition_3_S01', 'l3_Group_3_Condition_2_S02', 'l3_Group_3_Condition_1_S03', 'l3_Group_3_Condition_4_S04', 'l3_Group_4_Condition_3_S01', 'l3_Group_4_Condition_2_S02', 'l3_Group_4_Condition_1_S03', 'l3_Group_4_Condition_4_S04', 'l3_Group_1_Condition_3_S05', 'l3_Group_1_Condition_2_S06', 'l3_Group_1_Condition_1_S07', 'l3_Group_1_Condition_4_S08', 'l3_Group_2_Condition_3_S05', 'l3_Group_2_Condition_2_S06', 'l3_Group_2_Condition_1_S07', 'l3_Group_2_Condition_4_S08', 'l3_Group_3_Condition_3_S05', 'l3_Group_3_Condition_2_S06', 'l3_Group_3_Condition_1_S07', 'l3_Group_3_Condition_4_S08', 'l3_Group_4_Condition_3_S05', 'l3_Group_4_Condition_2_S06', 'l3_Group_4_Condition_1_S07', 'l3_Group_4_Condition_4_S08', 'l3_Group_1_Condition_7_S09', 'l3_Group_1_Condition_6_S10', 'l3_Group_1_Condition_5_S11', 'l3_Group_1_Condition_8_S12', 'l3_Group_2_Condition_7_S09', 'l3_Group_2_Condition_6_S10', 'l3_Group_2_Condition_5_S11', 'l3_Group_2_Condition_8_S12', 'l3_Group_3_Condition_7_S09', 'l3_Group_3_Condition_6_S10', 'l3_Group_3_Condition_5_S11', 'l3_Group_3_Condition_8_S12', 'l3_Group_4_Condition_7_S09', 'l3_Group_4_Condition_6_S10', 'l3_Group_4_Condition_5_S11', 'l3_Group_4_Condition_8_S12', 'l3_Group_1_Condition_7_S13', 'l3_Group_1_Condition_6_S14', 'l3_Group_1_Condition_5_S15', 'l3_Group_1_Condition_8_S16', 'l3_Group_2_Condition_7_S13', 'l3_Group_2_Condition_6_S14', 'l3_Group_2_Condition_5_S15', 'l3_Group_2_Condition_8_S16', 'l3_Group_3_Condition_7_S13', 'l3_Group_3_Condition_6_S14', 'l3_Group_3_Condition_5_S15', 'l3_Group_3_Condition_8_S16', 'l3_Group_4_Condition_7_S13', 'l3_Group_4_Condition_6_S14', 'l3_Group_4_Condition_5_S15', 'l3_Group_4_Condition_8_S16', 'l3_Group_1_Condition_7_S17', 'l3_Group_1_Condition_6_S18', 'l3_Group_1_Condition_5_S19', 'l3_Group_1_Condition_8_S20', 'l3_Group_2_Condition_7_S17', 'l3_Group_2_Condition_6_S18', 'l3_Group_2_Condition_5_S19', 'l3_Group_2_Condition_8_S20', 'l3_Group_3_Condition_7_S17', 'l3_Group_3_Condition_6_S18', 'l3_Group_3_Condition_5_S19', 'l3_Group_3_Condition_8_S20', 'l3_Group_4_Condition_7_S17', 'l3_Group_4_Condition_6_S18', 'l3_Group_4_Condition_5_S19', 'l3_Group_4_Condition_8_S20'),
        randomize('l4_Group_1_Condition_4_S01', 'l4_Group_1_Condition_3_S02', 'l4_Group_1_Condition_2_S03', 'l4_Group_1_Condition_1_S04', 'l4_Group_2_Condition_4_S01', 'l4_Group_2_Condition_3_S02', 'l4_Group_2_Condition_2_S03', 'l4_Group_2_Condition_1_S04', 'l4_Group_3_Condition_4_S01', 'l4_Group_3_Condition_3_S02', 'l4_Group_3_Condition_2_S03', 'l4_Group_3_Condition_1_S04', 'l4_Group_4_Condition_4_S01', 'l4_Group_4_Condition_3_S02', 'l4_Group_4_Condition_2_S03', 'l4_Group_4_Condition_1_S04', 'l4_Group_1_Condition_4_S05', 'l4_Group_1_Condition_3_S06', 'l4_Group_1_Condition_2_S07', 'l4_Group_1_Condition_1_S08', 'l4_Group_2_Condition_4_S05', 'l4_Group_2_Condition_3_S06', 'l4_Group_2_Condition_2_S07', 'l4_Group_2_Condition_1_S08', 'l4_Group_3_Condition_4_S05', 'l4_Group_3_Condition_3_S06', 'l4_Group_3_Condition_2_S07', 'l4_Group_3_Condition_1_S08', 'l4_Group_4_Condition_4_S05', 'l4_Group_4_Condition_3_S06', 'l4_Group_4_Condition_2_S07', 'l4_Group_4_Condition_1_S08', 'l4_Group_1_Condition_8_S09', 'l4_Group_1_Condition_7_S10', 'l4_Group_1_Condition_6_S11', 'l4_Group_1_Condition_5_S12', 'l4_Group_2_Condition_8_S09', 'l4_Group_2_Condition_7_S10', 'l4_Group_2_Condition_6_S11', 'l4_Group_2_Condition_5_S12', 'l4_Group_3_Condition_8_S09', 'l4_Group_3_Condition_7_S10', 'l4_Group_3_Condition_6_S11', 'l4_Group_3_Condition_5_S12', 'l4_Group_4_Condition_8_S09', 'l4_Group_4_Condition_7_S10', 'l4_Group_4_Condition_6_S11', 'l4_Group_4_Condition_5_S12', 'l4_Group_1_Condition_8_S13', 'l4_Group_1_Condition_7_S14', 'l4_Group_1_Condition_6_S15', 'l4_Group_1_Condition_5_S16', 'l4_Group_2_Condition_8_S13', 'l4_Group_2_Condition_7_S14', 'l4_Group_2_Condition_6_S15', 'l4_Group_2_Condition_5_S16', 'l4_Group_3_Condition_8_S13', 'l4_Group_3_Condition_7_S14', 'l4_Group_3_Condition_6_S15', 'l4_Group_3_Condition_5_S16', 'l4_Group_4_Condition_8_S13', 'l4_Group_4_Condition_7_S14', 'l4_Group_4_Condition_6_S15', 'l4_Group_4_Condition_5_S16', 'l4_Group_1_Condition_8_S17', 'l4_Group_1_Condition_7_S18', 'l4_Group_1_Condition_6_S19', 'l4_Group_1_Condition_5_S20', 'l4_Group_2_Condition_8_S17', 'l4_Group_2_Condition_7_S18', 'l4_Group_2_Condition_6_S19', 'l4_Group_2_Condition_5_S20', 'l4_Group_3_Condition_8_S17', 'l4_Group_3_Condition_7_S18', 'l4_Group_3_Condition_6_S19', 'l4_Group_3_Condition_5_S20', 'l4_Group_4_Condition_8_S17', 'l4_Group_4_Condition_7_S18', 'l4_Group_4_Condition_6_S19', 'l4_Group_4_Condition_5_S20')
    ),
    'debriefing'
);