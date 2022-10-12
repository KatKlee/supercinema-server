import nodemailer from 'nodemailer'

export const sendMail = (req, res) => {
    const message = {
        from: process.env.MAILSENDER,
        to: req.body.email,
        subject: "Danke für die Buchung",
        text: `Hallo ${req.body.firstname} ${req.body.lastname} :) Hiermit bestätigen Wir deine Buchung für den wunderbaren Film.`,
        /* html: `<p>${req.body.text}</p>` */

    }

    // SMTP config
    const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "c3a6e5ce81c33f",
            pass: "9f34ae713e6ba5"
        }
    })

    transporter.sendMail(message, (err, info) => {
        console.log(info)
        if (err)
            return res.status(500).json({ message: err })
        return res.status(200).jon({ message: 'läuft!' })
    })
}