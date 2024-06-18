const { Categories } = require('../models');
require('dotenv').config();

module.exports = class CategoriesController {
    static async showAll(req, res) {
        try {
            const categories = await Categories.findAll();
            res.status(200).json({
                data: categories
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async show(req, res) {
        try {
            const category = await Categories.findByPk(req.params.id);
            res.status(200).send(category);
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async create(req, res) {
        try {
            const category = await Categories.create({
                name: req.body.name,
                description: req.body.description
            });
            res.status(201).send("Categoria Criada com Sucesso !!");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async update(req, res) {
        try {
            const category = await Categories.findByPk(req.params.id);
            const result = await category.update({
                name: req.body.name,
                description: req.body.description
            });
            res.status(200).send("Categoria Atualizada com Sucesso !!");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async delete(req, res) {
        try {
            const category = await Categories.findByPk(req.params.id);
            await category.destroy();
            res.status(200).send("Excluída com Sucesso.");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }
};
