function Notify()
{
    console.log("开始发送通知");
    var Title,SubTitle,Content;
    TItle = "我是主标题";
    SubTitle  = "我是子标题";
    Content = "我是要推送的内容";
    $notification.post(Title,SubTitle,Content);
    
}
//Call Function
Notify()

console.log("结束发送通知");
