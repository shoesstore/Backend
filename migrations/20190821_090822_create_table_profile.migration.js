export default class CreateProfileTable {

    async up(schema) {
        await schema.createTable('profiles', table => {
            table.increments();
            table.string('external_id');
            table.string('provider');
            table.string('external_profile');
            table.timestamps();
            table.dateTime('deleted_at');
        })
    }

    async down(schema) {
        await schema.dropTable('profiles');

    }
}
