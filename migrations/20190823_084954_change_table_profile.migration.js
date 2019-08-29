export default class ChangeTableProfile {

    async up(schema) {
        await schema.alterTable('profiles', table => {
            table.dropColumn('external_id');
            table.dropColumn('provider');
            table.string('credential_id');
            table.string('name');
        })
    }

     async down(schema) {
        await schema.alterTable('profiles', table => {
            table.string('external_id');
            table.string('provider');
            table.dropColumn('credential_id');
            table.dropColumn('name');
        })
    }
}
