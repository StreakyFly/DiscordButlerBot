const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fact')
        .setDescription('Get a random fact')
        .addSubcommand(subcommand => subcommand
            .setName('cat')
            .setDescription('Get a random cat fact'))
        .addSubcommand(subcommand => subcommand
            .setName('dog')
            .setDescription('Get a random dog fact'))
        .addSubcommand(subcommand => subcommand
            .setName('bird')
            .setDescription('Get a random bird fact'))
        .addSubcommand(subcommand => subcommand
            .setName('fox')
            .setDescription('Get a random fox fact'))
        .addSubcommand(subcommand => subcommand
            .setName('panda')
            .setDescription('Get a random panda fact'))
        .addSubcommand(subcommand => subcommand
            .setName('red-panda')
            .setDescription('Get a random red panda fact'))
        .addSubcommand(subcommand => subcommand
            .setName('koala')
            .setDescription('Get a random koala fact'))
        .addSubcommand(subcommand => subcommand
            .setName('kangaroo')
            .setDescription('Get a random kangaroo fact'))
        .addSubcommand(subcommand => subcommand
            .setName('raccoon')
            .setDescription('Get a random raccoon fact')),
    async execute(interaction) {
        const subcommand_about = interaction.options.getSubcommand().replace("-", "_");

        try {
            const response = await fetch(`https://some-random-api.com/animal/${subcommand_about}`);
            const data = await response.json();

            await interaction.reply({ content: data.fact });
        } catch (error) {
            interaction.reply({ content: `There was an error trying to fetch a random ${subcommand_about} fact :confused:`, ephemeral: true });
        }
    }
};
