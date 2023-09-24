const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('image')
        .setDescription('Get a random image')
        .addSubcommand(subcommand => subcommand
            .setName('cat')
            .setDescription('Get a random cat image'))
        .addSubcommand(subcommand => subcommand
            .setName('dog')
            .setDescription('Get a random dog image'))
        .addSubcommand(subcommand => subcommand
            .setName('bird')
            .setDescription('Get a random bird image'))
        .addSubcommand(subcommand => subcommand
            .setName('fox')
            .setDescription('Get a random fox image'))
        .addSubcommand(subcommand => subcommand
            .setName('panda')
            .setDescription('Get a random panda image'))
        .addSubcommand(subcommand => subcommand
            .setName('red-panda')
            .setDescription('Get a random red panda image'))
        .addSubcommand(subcommand => subcommand
            .setName('koala')
            .setDescription('Get a random koala image'))
        .addSubcommand(subcommand => subcommand
            .setName('kangaroo')
            .setDescription('Get a random kangaroo image'))
        .addSubcommand(subcommand => subcommand
            .setName('raccoon')
            .setDescription('Get a random raccoon image')),
    async execute(interaction) {
        await interaction.deferReply();

        const subcommand_about = interaction.options.getSubcommand().replace("-", "_");

        try {
            const response = await fetch(`https://some-random-api.com/animal/${subcommand_about}`);
            const data = await response.json();

            const embed = new EmbedBuilder()
                .setImage(data.image)

            await interaction.editReply({ embeds: [embed] });

        } catch (error) {
            interaction.reply({ content: `There was an error trying to fetch a random ${subcommand_about} fact :confused:`, ephemeral: true });
        }
    }
};
