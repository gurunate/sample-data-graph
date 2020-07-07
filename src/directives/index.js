const { gql } = require('apollo-server');
const FormattableDateDirective = require('./FormattableDateDirective');

const DATE_FORMAT = 'MMM dd, yyyy h:mm aaa'; // Mar 23, 2020 8:29:32 AM CDT

const typeDef = gql`
    directive @formattableDate(
        # defaultFormat: String = "ddd, mmmm d, yyyy"
        defaultFormat: String = "${DATE_FORMAT}"
    ) on FIELD_DEFINITION
`;

module.exports = {
    typeDef,
    directives: { formattableDate: FormattableDateDirective }
};
