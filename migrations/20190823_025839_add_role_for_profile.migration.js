export default class AddRoleForProfile {

    async up(schema) {
        await schema.alterTable('profiles', table => {
            table.string('email');
            table.string('address');
            table.string('phone');
            table.boolean('gender');
            table.string('avatar');
            table.string('role');
            table.dropColumn('external_profile');
        })
    }

    async down(schema) {
        await schema.alterTable('profiles', table => {
            table.dropColumn('email');
            table.dropColumn('address');
            table.dropColumn('phone');
            table.dropColumn('gender');
            table.dropColumn('avatar');
            table.dropColumn('role');
            table.string('external_profile');
        })
    }
}
