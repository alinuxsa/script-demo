function Notify()
{
    console.log("开始发送通知");
    $notification.post('Title','SubTitle','Content');
    
}

Notify()

console.log("结束发送通知");
