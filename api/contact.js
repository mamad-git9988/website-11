// api/contact.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { sender, text } = req.body;
        
        // اینجا می‌تونی شرط بذاری یا داده‌ها رو پردازش کنی
        console.log("پیام جدید دریافت شد:", text);

        return res.status(200).json({ 
            success: true, 
            message: `پیام شما با موفقیت به سرور ارسال شد، ${sender} عزیز!` 
        });
    } else {
        return res.status(405).json({ message: 'فقط متد POST مجاز است' });
    }
}