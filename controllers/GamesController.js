const { Games } = require('../models');
require('dotenv').config();

module.exports = class GamesController {
    static async showAll(req, res) {
        try {
            const games = await Games.findAll();
            res.status(200).json({
                data: games
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async show(req, res) {
        try {
            const game = await Games.findByPk(req.params.id);
            res.status(200).send(game);
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async create(req, res) {
        try {
            const game = await Games.create({
                title: req.body.title,
                description: req.body.description,
                releaseDate: req.body.releaseDate,
                genre: req.body.genre,
                price: req.body.price
            });
            res.status(201).send("Jogo Criado com Sucesso !!");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async update(req, res) {
        try {
            const game = await Games.findByPk(req.params.id);
            const result = await game.update({
                title: req.body.title,
                description: req.body.description,
                releaseDate: req.body.releaseDate,
                genre: req.body.genre,
                price: req.body.price
            });
            res.status(200).send("Jogo Atualizado com Sucesso !!");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async delete(req, res) {
        try {
            const game = await Games.findByPk(req.params.id);
            await game.destroy();
            res.status(200).send("Excluído com Sucesso.");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }
};
