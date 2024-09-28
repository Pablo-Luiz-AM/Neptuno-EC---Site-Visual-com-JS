const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/recover-password', (req, res) => {
    const userEmail = req.body.email;

    // Aqui, você deveria verificar no seu banco de dados se o e-mail existe e obter a senha associada

    // Simulação - considere substituir isso pela lógica real do banco de dados
    const userPassword = "senha123";

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'seuemail@gmail.com', // Seu e-mail que enviará as mensagens
            pass: 'suasenha'
        }
    });

    const mailOptions = {
        from: 'seuemail@gmail.com', // Seu e-mail
        to: userEmail,
        subject: 'Recuperação de Senha',
        text: `Sua senha é: ${userPassword}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Erro ao enviar o e-mail de recuperação de senha.');
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.status(200).send('E-mail de recuperação de senha enviado com sucesso.');
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor está escutando na porta ${port}`);
});