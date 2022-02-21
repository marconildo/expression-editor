/*
sample:

{
    "name": "",
    "kind": "",
    "description": "",
    "examples": [],
    "parametersDescription": [],
    "parametersToAutoComplete": [],
    "synonyms": [],
    "inputTypes": [],
    "requiredParameters": 0,
    "functionType": "",
    "returnType": ""
}
*/
export const dataTypeStrings = { "string": "string", "integer": "numeric_value", "integral": "numeric_value", "boolean": "condition", "date": "date", "datetime": "datetime", "timestamp": "time_stamp", "any": "expression", "short": "numeric_value", "double": "numeric_value", "float": "numeric_value", "decimal": "numeric_value", "number": "numeric_value", "binary": "binary_value", "array": "array", "complex": "complex" };

/*
Aggregate
Text
Datetime
Math
Conversions
Logical operators
*/

export const functions = [
    {
        "name": "toInteger",
        "kind": "functions",
        "description": "Converts any numeric or string to an integer value. An optional Java decimal format can be used for the conversion. Truncates any long, float, double",
        "examples": [
            "toInteger(123)",
            "123",
            "toInteger('123')",
            "123",
            "toInteger('$123', '$###')",
            "123"
        ],
        "parametersDescription": [
            "value",
            "format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "integer"
    },
    {
        "name": "toDecimal",
        "kind": "functions",
        "description": "Converts any numeric or string to a decimal value. If precision and scale are not specified, it is defaulted to (10,2).An optional Java decimal format can be used for the conversion. An optional locale format in the form of BCP47 language like en-US, de, zh-CN",
        "examples": [
            "toDecimal(123.45)",
            "123.45",
            "toDecimal('123.45', 8, 4)",
            "123.4500",
            "toDecimal('$123.45', 8, 4,'$###.00')",
            "123.4500",
            "toDecimal('€123,45', 10, 2, '€###,##', 'de')",
            "123.45"
        ],
        "parametersDescription": [
            "value",
            "precision",
            "scale",
            "format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "precision",
            "scale",
            "format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "integral",
            "integral",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "decimal(10,0)"
    },
    {
        "name": "equalsIgnoreCase",
        "kind": "functions",
        "description": "Comparison equals operator ignoring case. Same as <=> operator",
        "examples": [
            "'abc'<=>'Abc'",
            "true",
            "equalsIgnoreCase('abc', 'Abc')",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "dayOfYear",
        "kind": "functions",
        "description": "Gets the day of the year given a date",
        "examples": [
            "dayOfYear(toDate('2016-04-09'))",
            "100"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "sha1",
        "kind": "functions",
        "description": "Calculates the SHA-1 digest of set of column of varying primitive datatypes and returns a 40 character hex string. It can be used to calculate a fingerprint for a row",
        "examples": [
            "sha1(5, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "'46d3b478e8ec4e1f3b453ac3d8e59d5854e282bb'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "sha1Binary",
        "kind": "functions",
        "description": "Calculates the SHA-1 digest of set of column of varying primitive datatypes and returns a 40 character hex string. It can be used to calculate a fingerprint for a row",
        "examples": [
            "sha1(5, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "unHex('46d3b478e8ec4e1f3b453ac3d8e59d5854e282bb')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "binary"
    },
    {
        "name": "maxIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the maximum value of a column",
        "examples": [
            "maxIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "any"
    },
    {
        "name": "false",
        "kind": "functions",
        "description": "Always returns a false value. Use the function syntax(false()) if there is a column named 'false'",
        "examples": [
            "(10 + 20 > 30)",
            "false",
            "(10 + 20 > 30)",
            "false()"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "initCap",
        "kind": "functions",
        "description": "Converts the first letter of every word to uppercase. Words are identified as separated by whitespace",
        "examples": [
            "initCap('cool iceCREAM')",
            "'Cool Icecream'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "flatten",
        "kind": "functions",
        "description": "Flattens array or arrays into a single array. Arrays of atomic items are return unaltered. An option defaulted to false can be given to flatten recursively more than one level deep",
        "examples": [
            "flatten([['bojjus', 'girl'], ['gunchus', 'boy']])",
            "['bojjus', 'girl', 'gunchus', 'boy']",
            "flatten(['bojjus', 'gunchus'])",
            "['bojjus', 'gunchus']",
            "flatten([[['bojjus', 'gunchus']]])",
            "[['bojjus', 'gunchus']]",
            "flatten([[['bojjus', 'gunchus']]] , true)",
            "['bojjus', 'gunchus']"
        ],
        "parametersDescription": [
            "array of array of items",
            "recurse"
        ],
        "parametersToAutoComplete": [
            "array_of_array_of_items",
            "recurse"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "boolean"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "lesserOrEqual",
        "kind": "functions",
        "description": "Comparison lesser than or equal operator. Same as <= operator",
        "examples": [
            "lesserOrEqual(12, 12)",
            "true",
            "('dumbo' <= 'dum')",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "lead",
        "kind": "functions",
        "description": "Gets the value of the first parameter evaluated n rows after the current row. The second parameter is the number of rows to look forward and the default value is 1. If there are not as many rows a value of null is returned unless a default value is specified",
        "examples": [
            "lead(amount, 2)",
            "",
            "lead(amount, 2000, 100)",
            ""
        ],
        "parametersDescription": [
            "value",
            "number of rows to look after",
            "default value"
        ],
        "parametersToAutoComplete": [
            "value",
            "number_of_rows_to_look_after",
            "default_value"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "number",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Window",
        "returnType": "any"
    },
    {
        "name": "coalesce",
        "kind": "functions",
        "description": "Returns the first not null value from a set of inputs. All inputs should be of the same type",
        "examples": [
            "coalesce(10, 20)",
            "10",
            "coalesce(toString(null), toString(null), 'dumbo', 'bo', 'go')",
            "'dumbo'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "count",
        "kind": "functions",
        "description": "Gets the aggregate count of values. If the optional column(s) is specified, it ignores NULL values in the count",
        "examples": [
            "count(custId)",
            "",
            "count(custId, custName)",
            "",
            "count()",
            "",
            "count(iif(isNull(custId), 1, NULL))",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 0,
        "functionType": "Aggregate",
        "returnType": "long"
    },
    {
        "name": "in",
        "kind": "functions",
        "description": "Checks if an item is in the array",
        "examples": [
            "in([10, 20, 30], 10)",
            "true",
            "in(['good', 'kid'], 'bad')",
            "false"
        ],
        "parametersDescription": [
            "array of items",
            "item to find"
        ],
        "parametersToAutoComplete": [
            "array_of_items",
            "item_to_find"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "currentTimestamp",
        "kind": "functions",
        "description": "Gets the current timestamp when the job starts to run with local time zone",
        "examples": [
            "currentTimestamp() == toTimestamp('2250-12-31 12:12:12')",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "timestamp"
    },
    {
        "name": "ltrim",
        "kind": "functions",
        "description": "Left trims a string of leading characters. If second parameter is unspecified, it trims whitespace. Else it trims any character specified in the second parameter",
        "examples": [
            "ltrim('  dumbo  ')",
            "'dumbo  '",
            "ltrim('!--!du!mbo!', '-!')",
            "'du!mbo!'"
        ],
        "parametersDescription": [
            "string to trim",
            "trim characters"
        ],
        "parametersToAutoComplete": [
            "string_to_trim",
            "trim_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "factorial",
        "kind": "functions",
        "description": "Calculate the factorial of a number",
        "examples": [
            "factorial(5)",
            "120"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "long"
    },
    {
        "name": "countIf",
        "kind": "functions",
        "description": "Based on a criteria gets the aggregate count of values. If the optional column is specified, it ignores NULL values in the count",
        "examples": [
            "countIf(state == 'CA' && commission < 10000, name)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "long"
    },
    {
        "name": "rlike",
        "kind": "functions",
        "description": "Checks if the string matches the given regex pattern",
        "examples": [
            "rlike('200.50', `(\\d+).(\\d+)`)",
            "true",
            "rlike('bogus', `M[0-9]+.*`)",
            "false"
        ],
        "parametersDescription": [
            "string",
            "pattern match"
        ],
        "parametersToAutoComplete": [
            "string",
            "pattern_match"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "soundex",
        "kind": "functions",
        "description": "Gets the soundex code for the string",
        "examples": [
            "soundex('genius')",
            "'G520'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "concatWS",
        "kind": "functions",
        "description": "Concatenates a variable number of strings together with a separator. The first parameter is the separator",
        "examples": [
            "concatWS(' ', 'dataflow', 'is', 'awesome')",
            "'dataflow is awesome'",
            "isNull(concatWS(null, 'dataflow', 'is', 'awesome'))",
            "true",
            "concatWS(' is ', 'dataflow', 'awesome')",
            "'dataflow is awesome'"
        ],
        "parametersDescription": [
            "separator",
            "this",
            "that"
        ],
        "parametersToAutoComplete": [
            "separator",
            "this",
            "that"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string",
            "string"
        ],
        "requiredParameters": 3,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "isIgnore",
        "kind": "functions",
        "description": "Checks if the row is marked to be ignored. For transformations taking more than one input stream you can pass the (1-based) index of the stream. The stream index should be either 1 or 2 and the default value is 1",
        "examples": [
            "isIgnore()",
            "",
            "isIgnore(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "sumDistinct",
        "kind": "functions",
        "description": "Gets the aggregate sum of distinct values of a numeric column",
        "examples": [
            "sumDistinct(col)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "replace",
        "kind": "functions",
        "description": "Replace all occurrences of a substring with another substring in the given string. If the last parameter is omitted, it is default to empty string",
        "examples": [
            "replace('doggie dog', 'dog', 'cat')",
            "'catgie cat'",
            "replace('doggie dog', 'dog', '')",
            "'gie '",
            "replace('doggie dog', 'dog')",
            "'gie '"
        ],
        "parametersDescription": [
            "string",
            "substring to find",
            "substring to replace"
        ],
        "parametersToAutoComplete": [
            "string",
            "substring_to_find",
            "substring_to_replace"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "dayOfWeek",
        "kind": "functions",
        "description": "Gets the day of the week given a date. 1 - Sunday, 2 - Monday ..., 7 - Saturday",
        "examples": [
            "dayOfWeek(toDate('2018-06-08'))",
            "6"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "crc32",
        "kind": "functions",
        "description": "Calculates the CRC32 hash of set of column of varying primitive datatypes given a bit length which can only be of values 0(256), 224, 256, 384, 512. It can be used to calculate a fingerprint for a row",
        "examples": [
            "crc32(256, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "3630253689L"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "long"
    },
    {
        "name": "blake2b",
        "kind": "functions",
        "description": "Calculates the Blake2 digest of set of column of varying primitive datatypes given a bit length which can only be multiples of 8 between 8 & 512. It can be used to calculate a fingerprint for a row",
        "examples": [
            "blake2b(256, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "'c9521a5080d8da30dffb430c50ce253c345cc4c4effc315dab2162dac974711d'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "blake2bBinary",
        "kind": "functions",
        "description": "Calculates the Blake2 digest of set of column of varying primitive datatypes given a bit length which can only be multiples of 8 between 8 & 512. It can be used to calculate a fingerprint for a row",
        "examples": [
            "blake2b(256, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "unHex('c9521a5080d8da30dffb430c50ce253c345cc4c4effc315dab2162dac974711d')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "binary"
    },
    {
        "name": "isError",
        "kind": "functions",
        "description": "Checks if the row is marked as error. For transformations taking more than one input stream you can pass the (1-based) index of the stream. The stream index should be either 1 or 2 and the default value is 1",
        "examples": [
            "isError()",
            "",
            "isError(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "hasError",
        "kind": "functions",
        "description": "Checks if the assert with provided ID is marked as error",
        "examples": [
            "hasError('assert1')",
            "",
            "hasError('assert2')",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "assertErrorMessages",
        "kind": "functions",
        "description": "Returns a map of all error messages for the row with assert ID as the key. Example output: ['assert1': 'This row failed on assert1.', 'assert2': 'This row failed on assert2.']. In this example, at(assertErrorMessages(), 'assert1') would return 'This row failed on assert1.'",
        "examples": [
            "assertErrorMessages()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "map"
    },
    {
        "name": "rtrim",
        "kind": "functions",
        "description": "Right trims a string of leading characters. If second parameter is unspecified, it trims whitespace. Else it trims any character specified in the second parameter",
        "examples": [
            "rtrim('  dumbo  ')",
            "'  dumbo'",
            "rtrim('!--!du!mbo!', '-!')",
            "'!--!du!mbo'"
        ],
        "parametersDescription": [
            "string to trim",
            "trim characters"
        ],
        "parametersToAutoComplete": [
            "string_to_trim",
            "trim_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "minus",
        "kind": "functions",
        "description": "Subtracts numbers. Subtract from a date number of days. Substract duration from a timestamp. Substract two timestamps to get difference in milliseconds. Same as the - operator",
        "examples": [
            "minus(20, 10)",
            "10",
            "20 - 10",
            "10",
            "minus(toDate('2012-12-15'), 3)",
            "toDate('2012-12-12')",
            "toDate('2012-12-15') - 3",
            "toDate('2012-12-12')",
            "toTimestamp('2019-02-03 05:19:28.871', 'yyyy-MM-dd HH:mm:ss.SSS') + (days(1) + hours(2) - seconds(10))",
            "toTimestamp('2019-02-04 07:19:18.871', 'yyyy-MM-dd HH:mm:ss.SSS')",
            "toTimestamp('2019-02-03 05:21:34.851', 'yyyy-MM-dd HH:mm:ss.SSS') - toTimestamp('2019-02-03 05:21:36.923', 'yyyy-MM-dd HH:mm:ss.SSS')",
            "-2072"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "sinh",
        "kind": "functions",
        "description": "Calculates a hyperbolic sine value",
        "examples": [
            "sinh(0)",
            "0.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "isDelete",
        "kind": "functions",
        "description": "Checks if the row is marked for delete. For transformations taking more than one input stream you can pass the (1-based) index of the stream. The stream index should be either 1 or 2 and the default value is 1",
        "examples": [
            "isDelete()",
            "",
            "isDelete(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "union",
        "kind": "functions",
        "description": "Returns a union set of distinct items from 2 arrays",
        "examples": [
            "union([10, 20, 30], [20, 40])",
            "[10, 20, 30, 40]",
            "union(['bojjus', 'gunchus', 'bojjus'], ['gunchus'])",
            "['bojjus', 'gunchus']"
        ],
        "parametersDescription": [
            "first array",
            "second array"
        ],
        "parametersToAutoComplete": [
            "first_array",
            "second_array"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "array"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "subMonths",
        "kind": "functions",
        "description": "Subtract months from a date or timestamp",
        "examples": [
            "subMonths(toDate('2016-09-30'), 1)",
            "toDate('2016-08-31')"
        ],
        "parametersDescription": [
            "date/timestamp",
            "months to subtract"
        ],
        "parametersToAutoComplete": [
            "date_or_timestamp",
            "months_to_subtract"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "Datetime",
        "returnType": "datetime"
    },
    {
        "name": "intersect",
        "kind": "functions",
        "description": "Returns an intersection set of distinct items from 2 arrays",
        "examples": [
            "intersect([10, 20, 30], [20, 40])",
            "[20]",
            "intersect(['bojjus', 'gunchus', 'bojjus'], ['gunchus'])",
            "['gunchus']"
        ],
        "parametersDescription": [
            "first array",
            "second array"
        ],
        "parametersToAutoComplete": [
            "first_array",
            "second_array"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "array"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "fromUTC",
        "kind": "functions",
        "description": "Converts to the timestamp from UTC. You can optionally pass the timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. It is defaulted to the current timezone. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "fromUTC(currentTimeStamp()) == toTimestamp('2050-12-12 19:18:12')",
            "false",
            "fromUTC(currentTimeStamp(), 'Asia/Seoul') != toTimestamp('2050-12-12 19:18:12')",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "timestamp",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "timestamp"
    },
    {
        "name": "mod",
        "kind": "functions",
        "description": "Modulus of pair of numbers. Same as the % operator",
        "examples": [
            "mod(20, 8)",
            "4",
            "20 % 8",
            "4"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "toTimestamp",
        "kind": "functions",
        "description": "Converts a string to a timestamp given an optional timestamp format. Refer to Java SimpleDateFormat for all possible formats. If the timestamp is omitted the default pattern.yyyy-[M]M-[d]d hh:mm:ss[.f...] is used. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'.Timestamp supports upto millisecond accuracy with value of 999Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "toTimestamp('2016-12-31 00:12:00')",
            "toTimestamp('2016-12-31 00:12:00')",
            "toTimestamp('2016-12-31T00:12:00', 'yyyy-MM-dd\\'T\\'HH:mm:ss', 'PST', 'en-US')",
            "toTimestamp('2016-12-31 00:12:00')",
            "toTimestamp('12/31/2016T00:12:00', 'MM/dd/yyyy\\'T\\'HH:mm:ss')",
            "toTimestamp('2016-12-31 00:12:00')",
            "millisecond(toTimestamp('2019-02-03 05:19:28.871', 'yyyy-MM-dd HH:mm:ss.SSS'))",
            "871"
        ],
        "parametersDescription": [
            "string",
            "timestamp format",
            "time zone",
            "locale"
        ],
        "parametersToAutoComplete": [
            "string",
            "timestamp_format",
            "time_zone",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "timestamp"
    },
    {
        "name": "levenshtein",
        "kind": "functions",
        "description": "Gets the levenshtein distance between two strings",
        "examples": [
            "levenshtein('boys', 'girls')",
            "4"
        ],
        "parametersDescription": [
            "from string",
            "to string"
        ],
        "parametersToAutoComplete": [
            "from_string",
            "to_string"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "integer"
    },
    {
        "name": "variance",
        "kind": "functions",
        "description": "Gets the variance of a column",
        "examples": [
            "variance(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "map",
        "kind": "functions",
        "description": "Maps each element of the array to a new element using the provided expression. Map expects a reference to one element in the expression function as #item",
        "examples": [
            "map([1, 2, 3, 4], #item + 2)",
            "[3, 4, 5, 6]",
            "map(['a', 'b', 'c', 'd'], #item + '_processed')",
            "['a_processed', 'b_processed', 'c_processed', 'd_processed']"
        ],
        "parametersDescription": [
            "array",
            "map expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "map_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "unaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "mapIf",
        "kind": "functions",
        "description": "Conditionally maps an array to another array of same or smaller length. The values can be of any datatype including structTypes. It takes a mapping function where you can address the item in the array as #item and current index as #index. For deeply nested maps you can refer to the parent maps using the #item_[n](#item_1, #index_1...) notation.",
        "examples": [
            "mapIf([10, 20, 30], #item > 10, #item + 5)",
            "[25, 35]",
            "mapIf(['bojjus', 'gunchus', 'ammi'], length(#item) > 4, upper(#item))",
            "['BOJJUS', 'GUNCHUS']"
        ],
        "parametersDescription": [
            "array",
            "map expression",
            "map_expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "map_expression",
            "map_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "binaryfunction",
            "binaryfunction"
        ],
        "requiredParameters": 3,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "dropRight",
        "kind": "functions",
        "description": "Removes as many characters from the right of the string. If the drop requested exceeds the length of the string, an empty string is returned",
        "examples": [
            "dropRight('bojjus', 2)",
            "'bojj'",
            "dropRight('cake', 10)",
            "''"
        ],
        "parametersDescription": [
            "string to drop characters",
            "number of items to drop"
        ],
        "parametersToAutoComplete": [
            "string_to_drop_characters",
            "number_of_items_to_drop"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "mapIndex",
        "kind": "functions",
        "description": "Maps each element of the array to a new element using the provided expression. Map expects a reference to one element in the expression function as #item and a reference to the element index as #index",
        "examples": [
            "mapIndex([1, 2, 3, 4], #item + 2 + #index)",
            "[4, 6, 8, 10]"
        ],
        "parametersDescription": [
            "array",
            "map expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "map_expression"
        ],
        "synonyms": [
            "iMap"
        ],
        "inputTypes": [
            "array",
            "binaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "mapLoop",
        "kind": "functions",
        "description": "Loops through from 1 to length to create an array of that length. It takes a mapping function where you can address the index in the array as #index. For deeply nested maps you can refer to the parent maps using the #index_n(#index_1, #index_2...) notation.",
        "examples": [
            "mapLoop(3, #index * 10)",
            "[10, 20, 30]"
        ],
        "parametersDescription": [
            "integer",
            "map expression"
        ],
        "parametersToAutoComplete": [
            "integer",
            "map_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer",
            "unaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "isNan",
        "kind": "functions",
        "description": "Check if this is not a number",
        "examples": [
            "isNan(10.2)",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "keys",
        "kind": "functions",
        "description": "Returns the keys for a map",
        "examples": [
            "keys(['bojjus' -> 'gunchus', 'appa' -> 'ammi'])",
            "['bojjus', 'appa']"
        ],
        "parametersDescription": [
            "map"
        ],
        "parametersToAutoComplete": [
            "map"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "map"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "values",
        "kind": "functions",
        "description": "Returns the values for a map",
        "examples": [
            "values(['bojjus' -> 'gunchus', 'appa' -> 'ammi'])",
            "['gunchus', 'ammi']"
        ],
        "parametersDescription": [
            "map"
        ],
        "parametersToAutoComplete": [
            "map"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "map"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "degrees",
        "kind": "functions",
        "description": "Converts radians to degrees",
        "examples": [
            "degrees(3.141592653589793)",
            "180"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "equals",
        "kind": "functions",
        "description": "Comparison equals operator. Same as == operator",
        "examples": [
            "equals(12, 24)",
            "false",
            "12 == 24",
            "false",
            "'bad' == 'bad'",
            "true",
            "isNull('good' == toString(null))",
            "true",
            "isNull(null == null)",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "nTile",
        "kind": "functions",
        "description": "The NTile function divides the rows for each window partition into `n` buckets ranging from 1 to at most `n`. Bucket values will differ by at most 1. If the number of rows in the partition does not divide evenly into the number of buckets, then the remainder values are distributed one per bucket, starting with the first bucket. The NTile function is useful for the calculation of tertiles, quartiles, deciles, and other common summary statistics. The function calculates two variables during initialization: The size of a regular bucket will have one extra row added to it. Both variables are based on the size of the current partition. During the calculation process the function keeps track of the current row number, the current bucket number, and the row number at which the bucket will change (bucketThreshold). When the current row number reaches bucket threshold, the bucket value is increased by one and the threshold is increased by the bucket size (plus one extra if the current bucket is padded).",
        "examples": [
            "nTile()",
            "",
            "nTile(numOfBuckets)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "Window",
        "returnType": "integer"
    },
    {
        "name": "covarianceSampleIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the sample covariance of two columns",
        "examples": [
            "covarianceSampleIf(region == 'West', sales, profit)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number",
            "number"
        ],
        "requiredParameters": 3,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "asin",
        "kind": "functions",
        "description": "Calculates an inverse sine value",
        "examples": [
            "asin(0)",
            "0.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "isNull",
        "kind": "functions",
        "description": "Checks if the value is NULL",
        "examples": [
            "isNull(NULL())",
            "true",
            "isNull('')",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isBoolean",
        "kind": "functions",
        "description": "Checks of the string value is a boolean value according to the rules of toBoolean",
        "examples": [
            "isBoolean('true')",
            "true",
            "isBoolean('no')",
            "true",
            "isBoolean('bojjus')",
            "false"
        ],
        "parametersDescription": [
            "string"
        ],
        "parametersToAutoComplete": [
            "string"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isShort",
        "kind": "functions",
        "description": "Checks of the string value is a short value given an optional format according to the rules of toShort",
        "examples": [
            "isShort('123')",
            "true",
            "isShort('$123', '$###')",
            "true",
            "isShort('gunchus')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isInteger",
        "kind": "functions",
        "description": "Checks of the string value is a integer value given an optional format according to the rules of toInteger",
        "examples": [
            "isInteger('123')",
            "true",
            "isInteger('$123', '$###')",
            "true",
            "isInteger('gunchus')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isLong",
        "kind": "functions",
        "description": "Checks of the string value is a long value given an optional format according to the rules of toLong",
        "examples": [
            "isLong('123')",
            "true",
            "isLong('$123', '$###')",
            "true",
            "isLong('gunchus')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isFloat",
        "kind": "functions",
        "description": "Checks of the string value is a float value given an optional format according to the rules of toFloat",
        "examples": [
            "isFloat('123')",
            "true",
            "isFloat('$123.45', '$###.00')",
            "true",
            "isFloat('icecream')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isDouble",
        "kind": "functions",
        "description": "Checks of the string value is a double value given an optional format according to the rules of toDouble",
        "examples": [
            "isDouble('123')",
            "true",
            "isDouble('$123.45', '$###.00')",
            "true",
            "isDouble('icecream')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isByte",
        "kind": "functions",
        "description": "Checks of the string value is a byte value given an optional format according to the rules of toByte",
        "examples": [
            "isByte('123')",
            "true",
            "isByte('chocolate')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isDecimal",
        "kind": "functions",
        "description": "Checks of the string value is a decimal value given an optional format according to the rules of toDecimal",
        "examples": [
            "isDecimal('123.45')",
            "true",
            "isDecimal('12/12/2000')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isDate",
        "kind": "functions",
        "description": "Checks if the input date string is a date using an optional input date format. Refer Java's SimpleDateFormat for available formats. If the input date format is omitted, default format is yyyy-[M]M-[d]d. Accepted formats are : [ yyyy, yyyy-[M]M, yyyy-[M]M-[d]d, yyyy-[M]M-[d]dT* ]",
        "examples": [
            "isDate('2012-8-18')",
            "true",
            "isDate('12/18--234234', 'MM/dd/yyyy')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isTimestamp",
        "kind": "functions",
        "description": "Checks if the input date string is a timestamp using an optional input timestamp format. Refer Java's SimpleDateFormat for available formats. If the timestamp is omitted the default pattern yyyy-[M]M-[d]d hh:mm:ss[.f...] is used. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. Timestamp supports upto millisecond accuracy with value of 999 Refer Java's SimpleDateFormat for available formats. https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html",
        "examples": [
            "isTimestamp('2016-12-31 00:12:00')",
            "true",
            "isTimestamp('2016-12-31T00:12:00', 'yyyy-MM-dd\\'T\\'HH:mm:ss', 'PST')",
            "true",
            "isTimestamp('2012-8222.18')",
            "false"
        ],
        "parametersDescription": [
            "string",
            "format"
        ],
        "parametersToAutoComplete": [
            "string",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "boolean"
    },
    {
        "name": "expr",
        "kind": "functions",
        "description": "Results in a expression from a string. This is the same as writing this expression in a non-literal form. This can be used to pass parameters as string representations",
        "examples": [
            "expr('price * discount')",
            ""
        ],
        "parametersDescription": [
            "literal expression"
        ],
        "parametersToAutoComplete": [
            "expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "radians",
        "kind": "functions",
        "description": "Converts degrees to radians",
        "examples": [
            "radians(180)",
            "3.141592653589793"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "bitwiseAnd",
        "kind": "functions",
        "description": "Bitwise And operator across integral types. Same as & operator",
        "examples": [
            "bitwiseAnd(0xf4, 0xef)",
            "0xe4"
        ],
        "parametersDescription": [
            "integral",
            "integral"
        ],
        "parametersToAutoComplete": [
            "integral",
            "integral"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integral",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "integral"
    },
    {
        "name": "associate",
        "kind": "functions",
        "description": "Creates an map of key/values. All the keys & values should be of the same type. If no items are specified, it is defaulted to map of string to string type.Same as a [ -> ] creation operator. Key and values should alternate with each other",
        "examples": [
            "associate('bojjus', 'gunchus', 'appa', 'ammi')",
            "['bojjus' -> 'gunchus', 'appa' -> 'ammi']",
            "associate('bojjus', 'gunchus')['bojjus']",
            "'gunchus'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "map"
    },
    {
        "name": "bitwiseOr",
        "kind": "functions",
        "description": "Bitwise Or operator across integral types. Same as | operator",
        "examples": [
            "bitwiseOr(0xf4, 0xef)",
            "0xff"
        ],
        "parametersDescription": [
            "integral",
            "integral"
        ],
        "parametersToAutoComplete": [
            "integral",
            "integral"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integral",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "integral"
    },
    {
        "name": "bitwiseXor",
        "kind": "functions",
        "description": "Bitwise Xor operator across integral types. Same as ^ operator",
        "examples": [
            "bitwiseXor(0xf4, 0xef)",
            "0x1b",
            "bitwiseXor(true(), false())",
            "true",
            "bitwiseXor(true(), true())",
            "false"
        ],
        "parametersDescription": [
            "any",
            "any"
        ],
        "parametersToAutoComplete": [
            "any",
            "any"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "toBitSet",
        "kind": "functions",
        "description": "Makes a bitset with the bits in the input parameter set",
        "examples": [
            "toBitSet([10, 32, 98])",
            "[4294968320L, 17179869184L]"
        ],
        "parametersDescription": [
            "any"
        ],
        "parametersToAutoComplete": [
            "any"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array"
        ],
        "requiredParameters": 2,
        "functionType": "Conversions",
        "returnType": "array"
    },
    {
        "name": "isBitSet",
        "kind": "functions",
        "description": "Checks if a bit position is set in this bitset",
        "examples": [
            "isBitSet(toBitSet([10, 32, 98]), 10)",
            "true"
        ],
        "parametersDescription": [
            "bitset",
            "bit to check"
        ],
        "parametersToAutoComplete": [
            "array",
            "integer"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "integer"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "setBitSet",
        "kind": "functions",
        "description": "Sets bit positions in this bitset",
        "examples": [
            "setBitSet(toBitSet([10, 32]), [98])",
            "[4294968320L, 17179869184L]"
        ],
        "parametersDescription": [
            "bitset",
            "bit ordinals to set"
        ],
        "parametersToAutoComplete": [
            "array",
            "array"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "array"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "between",
        "kind": "functions",
        "description": "Checks if the first value is in between two other values inclusively. Numeric, string and datetime values can be compared",
        "examples": [
            "between(10, 5, 24)",
            "true",
            "between(currentDate(), currentDate() + 10, currentDate() + 20)",
            "false"
        ],
        "parametersDescription": [
            "valueToCheck",
            "leftBound",
            "rightBound"
        ],
        "parametersToAutoComplete": [
            "valueToCheck",
            "leftBound",
            "rightBound"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any",
            "any"
        ],
        "requiredParameters": 3,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "isDistinct",
        "kind": "functions",
        "description": "Finds if a column or set of columns is distinct. It does not count null as a distinct value",
        "examples": [
            "isDistinct(custId, custName)",
            ""
        ],
        "parametersDescription": [
            "any",
            "any"
        ],
        "parametersToAutoComplete": [
            "any",
            "any"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "boolean"
    },
    {
        "name": "sumDistinctIf",
        "kind": "functions",
        "description": "Based on criteria gets the aggregate sum of a numeric column. The condition can be based on any column",
        "examples": [
            "sumDistinctIf(state == 'CA' && commission < 10000, sales)",
            "",
            "sumDistinctIf(true, sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "weeks",
        "kind": "functions",
        "description": "Duration in milliseconds for number of weeks",
        "examples": [
            "weeks(2)",
            "1209600000L"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "long"
    },
    {
        "name": "startsWith",
        "kind": "functions",
        "description": "Checks if the string starts with the supplied string",
        "examples": [
            "startsWith('dumbo', 'du')",
            "true"
        ],
        "parametersDescription": [
            "string",
            "substring to check"
        ],
        "parametersToAutoComplete": [
            "string",
            "substring_to_check"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "Text",
        "returnType": "boolean"
    },
    {
        "name": "normalize",
        "kind": "functions",
        "description": "Normalize the string value to separate accented unicode characters",
        "examples": [
            "regexReplace(normalize('bo\\xb2s'), `\\\\p{M}`, '')",
            "'boys'"
        ],
        "parametersDescription": [
            "String to normalize"
        ],
        "parametersToAutoComplete": [
            "String_to_normalize"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "escape",
        "kind": "functions",
        "description": "Escapes a string according to a format. Literal values for acceptable format are 'json', 'xml', 'ecmascript', 'html', 'java'",
        "examples": [
            "escape('{\\\"value\\\": 10}', 'json')",
            "'{\\\\\"value\\\\\": 10}'"
        ],
        "parametersDescription": [
            "string to escape",
            "format"
        ],
        "parametersToAutoComplete": [
            "string_to_escape",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "unescape",
        "kind": "functions",
        "description": "Unescapes a string according to a format. Literal values for acceptable format are 'json', 'xml', 'ecmascript', 'html', 'java'",
        "examples": [
            "unescape('{\\\\\"value\\\\\": 10}', 'json')",
            "'{\\\"value\\\": 10}'"
        ],
        "parametersDescription": [
            "string to unescape",
            "format"
        ],
        "parametersToAutoComplete": [
            "string_to_unescape",
            "format"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "iif",
        "kind": "functions",
        "description": "Based on a condition applies one value or the other. If other is unspecified it is considered NULL. Both the values must be compatible(numeric, string...)",
        "examples": [
            "iif(10 + 20 == 30, 'dumbo', 'gumbo')",
            "'dumbo'",
            "iif(10 > 30, 'dumbo', 'gumbo')",
            "'gumbo'",
            "iif(month(toDate('2018-12-01')) == 12, 345.12, 102.67)",
            "345.12"
        ],
        "parametersDescription": [
            "condition",
            "true_expression",
            "false_expression"
        ],
        "parametersToAutoComplete": [
            "condition",
            "true_expression",
            "false_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "covarianceSample",
        "kind": "functions",
        "description": "Gets the sample covariance of two columns",
        "examples": [
            "covarianceSample(sales, profit)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "minute",
        "kind": "functions",
        "description": "Gets the minute value of a timestamp. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. The local timezone is used as the default. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "minute(toTimestamp('2009-07-30 12:58:59'))",
            "58",
            "minute(toTimestamp('2009-07-30 12:58:59'), 'PST')",
            "58"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "timestamp",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "minIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the minimum value of a column",
        "examples": [
            "minIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "any"
    },
    {
        "name": "uuid",
        "kind": "functions",
        "description": "Returns the generated UUID",
        "examples": [
            "uuid()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "toBinary",
        "kind": "functions",
        "description": "Converts any numeric/date/timestamp/string to binary representation",
        "examples": [
            "toBinary(3)",
            "[0x11]"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "binary"
    },
    {
        "name": "hex",
        "kind": "functions",
        "description": "Returns a hex string representation of a binary value.",
        "examples": [
            "hex(toBinary([toByte(0x1f), toByte(0xad), toByte(0xbe)]))",
            "'1fadbe'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "binary"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "unhex",
        "kind": "functions",
        "description": "Unhexes a binary value from its string representation. This can be used in conjuction with sha2, md5 to convert from string to binary representation.",
        "examples": [
            "unhex('1fadbe')",
            "toBinary([toByte(0x1f), toByte(0xad), toByte(0xbe)])",
            "unhex(md5(5, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4')))",
            "toBinary([toByte(0x4c), toByte(0xe8), toByte(0xa8), toByte(0x80), toByte(0xbd), toByte(0x62), toByte(0x1a), toByte(0x1f), toByte(0xfa), toByte(0xd0), toByte(0xbc), toByte(0xa9), toByte(0x05), toByte(0xe1), toByte(0xbc), toByte(0x5a)])'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "binary"
    },
    {
        "name": "columns",
        "kind": "functions",
        "description": "Gets all output columns values for a stream. You can pass an optional stream name as argument.",
        "examples": [
            "columns()",
            "",
            "columns('DeriveStream')",
            ""
        ],
        "parametersDescription": [
            "stream name"
        ],
        "parametersToAutoComplete": [
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "columnNames",
        "kind": "functions",
        "description": "Gets all output columns names for a stream. You can pass an optional stream name as argument.",
        "examples": [
            "columnNames()",
            "",
            "columnNames('DeriveStream')",
            ""
        ],
        "parametersDescription": [
            "stream name"
        ],
        "parametersToAutoComplete": [
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "string[]"
    },
    {
        "name": "hasColumn",
        "kind": "functions",
        "description": "Checks for a column value by name in the stream. You can pass an optional stream name as the second argument. Column names known at design time should be addressed just by their name. Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "hasColumn('parent')",
            ""
        ],
        "parametersDescription": [
            "column name",
            "stream name"
        ],
        "parametersToAutoComplete": [
            "column_name",
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "dayOfMonth",
        "kind": "functions",
        "description": "Gets the day of the month given a date",
        "examples": [
            "dayOfMonth(toDate('2018-06-08'))",
            "8"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "kurtosis",
        "kind": "functions",
        "description": "Gets the kurtosis of a column",
        "examples": [
            "kurtosis(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "monthsBetween",
        "kind": "functions",
        "description": "Gets the number of months between two dates. You can round off the calculation.You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. The local timezone is used as the default. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "monthsBetween(toTimestamp('1997-02-28 10:30:00'), toDate('1996-10-30'))",
            "3.94959677"
        ],
        "parametersDescription": [
            "from date/timestamp",
            "to date/timestamp",
            "roundoff",
            "time zone"
        ],
        "parametersToAutoComplete": [
            "from_date_or_timestamp",
            "to_date_or_timestamp",
            "roundoff",
            "time_zone"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime",
            "datetime",
            "boolean",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "lag",
        "kind": "functions",
        "description": "Gets the value of the first parameter evaluated n rows before the current row. The second parameter is the number of rows to look back and the default value is 1. If there are not as many rows a value of null is returned unless a default value is specified",
        "examples": [
            "lag(amount, 2)",
            "",
            "lag(amount, 2000, 100)",
            ""
        ],
        "parametersDescription": [
            "value",
            "number of rows to look before",
            "default value"
        ],
        "parametersToAutoComplete": [
            "value",
            "number_of_rows_to_look_before",
            "default_value"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "number",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Window",
        "returnType": "any"
    },
    {
        "name": "sha2",
        "kind": "functions",
        "description": "Calculates the SHA-2 digest of set of column of varying primitive datatypes given a bit length which can only be of values 0(256), 224, 256, 384, 512. It can be used to calculate a fingerprint for a row",
        "examples": [
            "sha2(256, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "'afe8a553b1761c67d76f8c31ceef7f71b66a1ee6f4e6d3b5478bf68b47d06bd3'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "sha2Binary",
        "kind": "functions",
        "description": "Calculates the SHA-2 digest of set of column of varying primitive datatypes given a bit length which can only be of values 0(256), 224, 256, 384, 512. It can be used to calculate a fingerprint for a row",
        "examples": [
            "sha2(256, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "unHex('afe8a553b1761c67d76f8c31ceef7f71b66a1ee6f4e6d3b5478bf68b47d06bd3')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "binary"
    },
    {
        "name": "rank",
        "kind": "functions",
        "description": "Computes the rank of a value in a group of values. The result is one plus the number of rows preceding or equal to the current row in the ordering of the partition. The values will produce gaps in the sequence. Rank works even when data is not sorted and looks for change in values",
        "examples": [
            "rank()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "Window",
        "returnType": "integer"
    },
    {
        "name": "seconds",
        "kind": "functions",
        "description": "Duration in milliseconds for number of seconds",
        "examples": [
            "seconds(2)",
            "2000L"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "long"
    },
    {
        "name": "left",
        "kind": "functions",
        "description": "Extracts a substring start at index 1 with number of characters. Same as SUBSTRING(str, 1, n)",
        "examples": [
            "left('bojjus', 2)",
            "'bo'",
            "left('bojjus', 20)",
            "'bojjus'"
        ],
        "parametersDescription": [
            "string to subset",
            "number of characters"
        ],
        "parametersToAutoComplete": [
            "string_to_subset",
            "number_of_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "varianceSampleIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the unbiased variance of a column",
        "examples": [
            "varianceSampleIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "log10",
        "kind": "functions",
        "description": "Calculates log value based on 10 base",
        "examples": [
            "log10(100)",
            "2"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "avg",
        "kind": "functions",
        "description": "Gets the average of values of a column",
        "examples": [
            "avg(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "rowNumber",
        "kind": "functions",
        "description": "Assigns a sequential row numbering for rows in a window starting with 1",
        "examples": [
            "rowNumber()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "Window",
        "returnType": "integer"
    },
    {
        "name": "concat",
        "kind": "functions",
        "description": "Concatenates a variable number of strings together. Same as the + operator with strings",
        "examples": [
            "concat('dataflow', 'is', 'awesome')",
            "'dataflowisawesome'",
            "'dataflow' + 'is' + 'awesome'",
            "'dataflowisawesome'",
            "isNull('sql' + null)",
            "true"
        ],
        "parametersDescription": [
            "this",
            "that"
        ],
        "parametersToAutoComplete": [
            "this",
            "that"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "pMod",
        "kind": "functions",
        "description": "Positive Modulus of pair of numbers.",
        "examples": [
            "pmod(-20, 8)",
            "4"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "mean",
        "kind": "functions",
        "description": "Gets the mean of values of a column. Same as AVG",
        "examples": [
            "mean(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "isUpsert",
        "kind": "functions",
        "description": "Checks if the row is marked for insert. For transformations taking more than one input stream you can pass the (1-based) index of the stream. The stream index should be either 1 or 2 and the default value is 1",
        "examples": [
            "isUpsert()",
            "",
            "isUpsert(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "fromBase64",
        "kind": "functions",
        "description": "Encodes the given string in base64. You can optionally pass the encoding type",
        "examples": [
            "fromBase64('Z3VuY2h1cw==')",
            "'gunchus'",
            "fromBase64('SGVsbG8gV29ybGQ=', 'Windows-1252')",
            "'Hello World'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "min",
        "kind": "functions",
        "description": "Gets the minimum value of a column",
        "examples": [
            "min(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "any"
    },
    {
        "name": "unfold",
        "kind": "functions",
        "description": "Unfolds an array into a set of rows and repeating the values for the remaining columns in every row",
        "examples": [
            "unfold(addresses)",
            "",
            "unfold( @(name = salesPerson, sales = salesAmount) )",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "instr",
        "kind": "functions",
        "description": "Finds the position(1 based) of the substring within a string. 0 is returned if not found",
        "examples": [
            "instr('dumbo', 'mbo')",
            "3",
            "instr('microsoft', 'o')",
            "5",
            "instr('good', 'bad')",
            "0"
        ],
        "parametersDescription": [
            "string",
            "substring to find"
        ],
        "parametersToAutoComplete": [
            "string",
            "substring_to_find"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "integer"
    },
    {
        "name": "year",
        "kind": "functions",
        "description": "Gets the year value of a date",
        "examples": [
            "year(toDate('2012-8-8'))",
            "2012"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "lower",
        "kind": "functions",
        "description": "Lowercases a string",
        "examples": [
            "lower('GunChus')",
            "'gunchus'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "currentUTC",
        "kind": "functions",
        "description": "Gets the current timestamp as UTC. If you want your current time to be interpreted in a different timezone than your cluster time zone, you can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. It is defaulted to the current timezone. Refer to Java's SimpleDateFormat for available formats.To convert the UTC time to a different timezone use fromUTC()",
        "examples": [
            "currentUTC() == toTimestamp('2050-12-12 19:18:12')",
            "false",
            "currentUTC() != toTimestamp('2050-12-12 19:18:12')",
            "true",
            "fromUTC(currentUTC(), 'Asia/Seoul') != toTimestamp('2050-12-12 19:18:12')",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "timestamp"
    },
    {
        "name": "divide",
        "kind": "functions",
        "description": "Divides pair of numbers. Same as the / operator",
        "examples": [
            "divide(20, 10)",
            "2",
            "20 / 10",
            "2"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "or",
        "kind": "functions",
        "description": "Logical OR operator. Same as ||",
        "examples": [
            "or(true, false)",
            "true",
            "true || false",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "boolean"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "stddevPopulation",
        "kind": "functions",
        "description": "Gets the population standard deviation of a column",
        "examples": [
            "stddevPopulation(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "cos",
        "kind": "functions",
        "description": "Calculates a cosine value",
        "examples": [
            "cos(10)",
            "-0.8390715290764524"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "null",
        "kind": "functions",
        "description": "Returns a NULL value. Use the function syntax(null()) if there is a column named 'null'. Any operation that uses will result in a NULL",
        "examples": [
            "isNull('dumbo' + null)",
            "true",
            "isNull(10 * null)",
            "true",
            "isNull('')",
            "false",
            "isNull(10 + 20)",
            "false",
            "isNull(10/0)",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "null"
    },
    {
        "name": "upper",
        "kind": "functions",
        "description": "Uppercases a string",
        "examples": [
            "upper('bojjus')",
            "'BOJJUS'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "last",
        "kind": "functions",
        "description": "Gets the last value of a column group. If the second parameter ignoreNulls is omitted, it is assumed false",
        "examples": [
            "last(sales)",
            "",
            "last(sales, false)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "boolean"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "any"
    },
    {
        "name": "toFloat",
        "kind": "functions",
        "description": "Converts any numeric or string to a float value. An optional Java decimal format can be used for the conversion. Truncates any double",
        "examples": [
            "toFloat(123.45)",
            "123.45f",
            "toFloat('123.45')",
            "123.45f",
            "toFloat('$123.45', '$###.00')",
            "123.45f"
        ],
        "parametersDescription": [
            "value",
            "format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "float"
    },
    {
        "name": "avgIf",
        "kind": "functions",
        "description": "Based on a criteria gets the average of values of a column",
        "examples": [
            "avgIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "addDays",
        "kind": "functions",
        "description": "Add days to a date or timestamp. Same as the + operator for date",
        "examples": [
            "addDays(toDate('2016-08-08'), 1)",
            "toDate('2016-08-09')"
        ],
        "parametersDescription": [
            "date/timestamp",
            "days to add"
        ],
        "parametersToAutoComplete": [
            "date_or_timestamp",
            "days_to_add"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "Datetime",
        "returnType": "datetime"
    },
    {
        "name": "notNull",
        "kind": "functions",
        "description": "Checks if the value is not NULL",
        "examples": [
            "notNull(NULL())",
            "false",
            "notNull('')",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "cbrt",
        "kind": "functions",
        "description": "Calculate the cube root of a number",
        "examples": [
            "cbrt(8)",
            "2.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "hour",
        "kind": "functions",
        "description": "Gets the hour value of a timestamp. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. The local timezone is used as the default. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "hour(toTimestamp('2009-07-30 12:58:59'))",
            "12",
            "hour(toTimestamp('2009-07-30 12:58:59'), 'PST')",
            "12"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "timestamp",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "atan",
        "kind": "functions",
        "description": "Calculates a inverse tangent value",
        "examples": [
            "atan(0)",
            "0.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "toLong",
        "kind": "functions",
        "description": "Converts any numeric or string to a long value. An optional Java decimal format can be used for the conversion. Truncates any float, double",
        "examples": [
            "toLong(123)",
            "123",
            "toLong('123')",
            "123",
            "toLong('$123', '$###')",
            "123"
        ],
        "parametersDescription": [
            "value",
            "format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "long"
    },
    {
        "name": "partitionId",
        "kind": "functions",
        "description": "Returns the current partition id the input row is in",
        "examples": [
            "partitionId()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "integer"
    },
    {
        "name": "dropLeft",
        "kind": "functions",
        "description": "Removes as many characters from the left of the string. If the drop requested exceeds the length of the string, an empty string is returned",
        "examples": [
            "dropLeft('bojjus', 2)",
            "'jjus'",
            "dropLeft('cake', 10)",
            "''"
        ],
        "parametersDescription": [
            "string to drop characters",
            "number of items to drop"
        ],
        "parametersToAutoComplete": [
            "string_to_drop_characters",
            "number_of_items_to_drop"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "ceil",
        "kind": "functions",
        "description": "Returns the smallest integer not smaller than the number",
        "examples": [
            "ceil(-0.1)",
            "0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "number"
    },
    {
        "name": "least",
        "kind": "functions",
        "description": "Comparison lesser than or equal operator. Same as <= operator",
        "examples": [
            "least(10, 30, 15, 20)",
            "10",
            "least(toDate('2010-12-12'), toDate('2011-12-12'), toDate('2000-12-12'))",
            "toDate('2000-12-12')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "subDays",
        "kind": "functions",
        "description": "Subtract months from a date or timestamp. Same as the - operator for date",
        "examples": [
            "subDays(toDate('2016-08-08'), 1)",
            "toDate('2016-08-07')"
        ],
        "parametersDescription": [
            "date/timestamp",
            "days to subtract"
        ],
        "parametersToAutoComplete": [
            "date_or_timestamp",
            "days_to_subtract"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "Datetime",
        "returnType": "datetime"
    },
    {
        "name": "stddevIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the standard deviation of a column",
        "examples": [
            "stddevIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "isAssignable",
        "kind": "functions",
        "description": "Finds if this datatype expressed as input/output script can be assigned to a column from a stream. Return null if the column is not found. If the optional third parameter 'exact match' is specified as true, returns true only if the datatype exactly matches the column type. Else returns true even if the datatype is a subset of the column type.",
        "examples": [
            "isAssignable(byPosition(1), 'decimal')",
            "",
            "isAssignable(byName($colName), 'string')",
            "",
            "isAssignable(custName, 'name as (firstName as string, lastName as string)')",
            "",
            "isAssignable(byName($colName), 'string', true())",
            ""
        ],
        "parametersDescription": [
            "column/expression",
            "datatype",
            "exact match"
        ],
        "parametersToAutoComplete": [
            "column_or_expression",
            "datatype",
            "exact_match"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "boolean"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "reverse",
        "kind": "functions",
        "description": "Reverses a string",
        "examples": [
            "reverse('gunchus')",
            "'suhcnug'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "meanIf",
        "kind": "functions",
        "description": "Based on a criteria gets the mean of values of a column. Same as avgIf",
        "examples": [
            "meanIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "filter",
        "kind": "functions",
        "description": "Filters elements out of the array that do not meet the provided predicate. Filter expects a reference to one element in the predicate function as #item",
        "examples": [
            "filter([1, 2, 3, 4], #item > 2)",
            "[3, 4]",
            "filter(['a', 'b', 'c', 'd'], #item == 'a' || #item == 'b')",
            "['a', 'b']"
        ],
        "parametersDescription": [
            "array",
            "filter expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "filter_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "unaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "minutes",
        "kind": "functions",
        "description": "Duration in milliseconds for number of minutes",
        "examples": [
            "minutes(2)",
            "120000L"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "long"
    },
    {
        "name": "regexSplit",
        "kind": "functions",
        "description": "Splits a string based on a delimiter based on regex and returns an array of strings",
        "examples": [
            "regexSplit('bojjusAgunchusBdumbo', `[CAB]`)",
            "['bojjus', 'gunchus', 'dumbo']",
            "regexSplit('bojjusAgunchusBdumboC', `[CAB]`)",
            "['bojjus', 'gunchus', 'dumbo', '']",
            "(regexSplit('bojjusAgunchusBdumboC', `[CAB]`)[1])",
            "'bojjus'",
            "isNull(regexSplit('bojjusAgunchusBdumboC', `[CAB]`)[20])",
            "true"
        ],
        "parametersDescription": [
            "string to split",
            "regex expression"
        ],
        "parametersToAutoComplete": [
            "string_to_split",
            "regex_expression"
        ],
        "synonyms": [
            "regex_split"
        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "Text",
        "returnType": "array"
    },
    {
        "name": "covariancePopulation",
        "kind": "functions",
        "description": "Gets the population covariance between two columns",
        "examples": [
            "covariancePopulation(sales, profit)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "nextSequence",
        "kind": "functions",
        "description": "Returns the next unique sequence. The number is consecutive only within a partition and is prefixed by the partitionId",
        "examples": [
            "nextSequence() == 12313112",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "long"
    },
    {
        "name": "mapAssociation",
        "kind": "functions",
        "description": "Transforms a map by associating the keys to new values. It takes a mapping function where you can address the item as #key and current value as #value.",
        "examples": [
            "mapAssociation(['bojjus' -> 'gunchus', 'appa' -> 'ammi'], @(key = #key, value = #value))",
            "[@(key = 'bojjus', value = 'gunchus'), @(key = 'appa', value = 'ammi')]"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "map",
            "binaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "endsWith",
        "kind": "functions",
        "description": "Checks if the string ends with the supplied string",
        "examples": [
            "endsWith('dumbo', 'mbo')",
            "true"
        ],
        "parametersDescription": [
            "string",
            "substring to check"
        ],
        "parametersToAutoComplete": [
            "string",
            "substring_to_check"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "Text",
        "returnType": "boolean"
    },
    {
        "name": "millisecond",
        "kind": "functions",
        "description": "Gets the millisecond value of a date. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. The local timezone is used as the default. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "millisecond(toTimestamp('2009-07-30 12:58:59.871', 'yyyy-MM-dd HH:mm:ss.SSS'))",
            "871"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "timestamp",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "hours",
        "kind": "functions",
        "description": "Duration in milliseconds for number of hours",
        "examples": [
            "hours(2)",
            "7200000L"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "long"
    },
    {
        "name": "variancePopulationIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the population variance of a column",
        "examples": [
            "variancePopulationIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "second",
        "kind": "functions",
        "description": "Gets the second value of a date. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. The local timezone is used as the default. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "second(toTimestamp('2009-07-30 12:58:59'))",
            "59"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "timestamp",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "at",
        "kind": "functions",
        "description": "Finds the element at an array index. The index is 1-based. Out of bounds index results in a null value.Finds a value in a map given a key. If the key is not found it returns null",
        "examples": [
            "at(['bojjus', 'gunchus'], 1)",
            "'bojjus'",
            "['bojjus', 'gunchus'][1]",
            "'bojjus'",
            "isNull(['bojjus', 'gunchus'][0])",
            "true",
            "isNull(['bojjus', 'gunchus'][20])",
            "true",
            "at(['bojjus' -> 'gunchus', 'appa' -> 'ammi'], 'bojjus')",
            "'gunchus'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "toBoolean",
        "kind": "functions",
        "description": "Converts a value of ('t', 'true', 'y', 'yes', '1') to true and ('f', 'false', 'n', 'no', '0') to false and NULL for any other value",
        "examples": [
            "toBoolean('true')",
            "true",
            "toBoolean('n')",
            "false",
            "isNull(toBoolean('truthy'))",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "boolean"
    },
    {
        "name": "isMatch",
        "kind": "functions",
        "description": "Checks if the row is matched at lookup. For transformations taking more than one input stream you can pass the (1-based) index of the stream. The stream index should be either 1 or 2 and the default value is 1",
        "examples": [
            "isMatch()",
            "",
            "isMatch(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "md5",
        "kind": "functions",
        "description": "Calculates the MD5 digest of set of column of varying primitive datatypes and returns a 32 character hex string. It can be used to calculate a fingerprint for a row",
        "examples": [
            "md5(5, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "'4ce8a880bd621a1ffad0bca905e1bc5a'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "md5Binary",
        "kind": "functions",
        "description": "Calculates the MD5 digest of set of column of varying primitive datatypes and returns a 32 character hex string. It can be used to calculate a fingerprint for a row",
        "examples": [
            "md5(5, 'gunchus', 8.2, 'bojjus', true, toDate('2010-4-4'))",
            "unHex('4ce8a880bd621a1ffad0bca905e1bc5a')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "binary"
    },
    {
        "name": "max",
        "kind": "functions",
        "description": "Gets the maximum value of a column",
        "examples": [
            "max(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "any"
    },
    {
        "name": "variancePopulation",
        "kind": "functions",
        "description": "Gets the population variance of a column",
        "examples": [
            "variancePopulation(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "atan2",
        "kind": "functions",
        "description": "Returns the angle in radians between the positive x-axis of a plane and the point given by the coordinates",
        "examples": [
            "atan2(0, 0)",
            "0.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "sqrt",
        "kind": "functions",
        "description": "Calculates the square root of a number",
        "examples": [
            "sqrt(9)",
            "3"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "weekOfYear",
        "kind": "functions",
        "description": "Gets the week of the year given a date",
        "examples": [
            "weekOfYear(toDate('2008-02-20'))",
            "8"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "iifNull",
        "kind": "functions",
        "description": "Given two or more inputs, returns the first not null item. This function is equivalent to coalesce.",
        "examples": [
            "iifNull(10, 20)",
            "10",
            "iifNull(null, 20, 40)",
            "20",
            "iifNull('azure', 'data', 'factory')",
            "'factory'",
            "iifNull(null, 'data', 'factory')",
            "'data'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "greatest",
        "kind": "functions",
        "description": "Returns the greatest value among the list of values as input skipping null values. Returns null if all inputs are null",
        "examples": [
            "greatest(10, 30, 15, 20)",
            "30",
            "greatest(10, toInteger(null), 20)",
            "20",
            "greatest(toDate('2010-12-12'), toDate('2011-12-12'), toDate('2000-12-12'))",
            "toDate('2011-12-12')",
            "greatest(toTimestamp('2019-02-03 05:19:28.871', 'yyyy-MM-dd HH:mm:ss.SSS'), toTimestamp('2019-02-05 08:21:34.890', 'yyyy-MM-dd HH:mm:ss.SSS'))",
            "toTimestamp('2019-02-05 08:21:34.890', 'yyyy-MM-dd HH:mm:ss.SSS')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "stddev",
        "kind": "functions",
        "description": "Gets the standard deviation of a column",
        "examples": [
            "stdDev(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "floor",
        "kind": "functions",
        "description": "Returns the largest integer not greater than the number",
        "examples": [
            "floor(-0.1)",
            "-1"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "number"
    },
    {
        "name": "negate",
        "kind": "functions",
        "description": "Negates a number. Turns positive numbers to negative and vice versa",
        "examples": [
            "negate(13)",
            "-13"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "number"
    },
    {
        "name": "approxDistinctCount",
        "kind": "functions",
        "description": "Gets the approximate aggregate count of distinct values for a column. The optional second parameter is to control the estimation error",
        "examples": [
            "approxDistinctCount(custId)",
            "",
            "approxDistinctCount(custId, custName)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "double"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "long"
    },
    {
        "name": "xor",
        "kind": "functions",
        "description": "Logical XOR operator. Same as ^ operator",
        "examples": [
            "xor(true, false)",
            "true",
            "xor(true, true)",
            "false",
            "true ^ false",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "boolean"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "split",
        "kind": "functions",
        "description": "Splits a string based on a delimiter and returns an array of strings",
        "examples": [
            "split('bojjus,guchus,dumbo', ',')",
            "['bojjus', 'guchus', 'dumbo']",
            "split('bojjus,guchus,dumbo', '|')",
            "['bojjus,guchus,dumbo']",
            "split('bojjus, guchus, dumbo', ', ')",
            "['bojjus', 'guchus', 'dumbo']",
            "split('bojjus, guchus, dumbo', ', ')[1]",
            "'bojjus'",
            "isNull(split('bojjus, guchus, dumbo', ', ')[0])",
            "true",
            "isNull(split('bojjus, guchus, dumbo', ', ')[20])",
            "true",
            "split('bojjusguchusdumbo', ',')",
            "['bojjusguchusdumbo']"
        ],
        "parametersDescription": [
            "string to split",
            "split characters"
        ],
        "parametersToAutoComplete": [
            "string_to_split",
            "split_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "countDistinct",
        "kind": "functions",
        "description": "Gets the aggregate count of distinct values of a set of columns",
        "examples": [
            "countDistinct(custId, custName)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "long"
    },
    {
        "name": "distinct",
        "kind": "functions",
        "description": "Returns a distinct set of items from an array",
        "examples": [
            "distinct([10, 20, 30, 10])",
            "[10, 20, 30]",
            "distinct(['bojjus', 'gunchus', 'bojjus'])",
            "['bojjus', 'gunchus']"
        ],
        "parametersDescription": [
            "array to make distinct"
        ],
        "parametersToAutoComplete": [
            "array_to_make_distinct"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "countAll",
        "kind": "functions",
        "description": "Gets the aggregate count of values including nulls",
        "examples": [
            "countAll(custId, custName)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "long"
    },
    {
        "name": "countAllDistinct",
        "kind": "functions",
        "description": "Gets the aggregate count of distinct values of a set of columns including nulls",
        "examples": [
            "countAllDistinct(custId, custName)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "long"
    },
    {
        "name": "toUTC",
        "kind": "functions",
        "description": "Converts the timestamp to UTC. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. It is defaulted to the current timezone. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "toUTC(currentTimeStamp()) == toTimestamp('2050-12-12 19:18:12')",
            "false",
            "toUTC(currentTimeStamp(), 'Asia/Seoul') != toTimestamp('2050-12-12 19:18:12')",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "timestamp",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "timestamp"
    },
    {
        "name": "slice",
        "kind": "functions",
        "description": "Extracts a subset of an array from a position. Position is 1 based. If the length is omitted, it is defaulted to end of the string",
        "examples": [
            "slice([10, 20, 30, 40], 1, 2)",
            "[10, 20]",
            "slice([10, 20, 30, 40], 2)",
            "[20, 30, 40]",
            "slice([10, 20, 30, 40], 2)[1]",
            "20",
            "isNull(slice([10, 20, 30, 40], 2)[0])",
            "true",
            "isNull(slice([10, 20, 30, 40], 2)[20])",
            "true",
            "slice(['a', 'b', 'c', 'd'], 8)",
            "[]"
        ],
        "parametersDescription": [
            "array to slice",
            "from 1-based index",
            "number of items"
        ],
        "parametersToAutoComplete": [
            "array_to_slice",
            "from_1-based_index",
            "number_of_items"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "integral",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "addMonths",
        "kind": "functions",
        "description": "Add months to a date or timestamp. You can optionally pass a timezone",
        "examples": [
            "addMonths(toDate('2016-08-31'), 1)",
            "toDate('2016-09-30')",
            "addMonths(toTimestamp('2016-09-30 10:10:10'), -1)",
            "toTimestamp('2016-08-31 10:10:10')"
        ],
        "parametersDescription": [
            "date/timestamp",
            "months to add"
        ],
        "parametersToAutoComplete": [
            "date_or_timestamp",
            "months_to_add"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime",
            "integral",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "Datetime",
        "returnType": "datetime"
    },
    {
        "name": "array",
        "kind": "functions",
        "description": "Creates an array of items. All the items should be of the same type. If no items are specified, it is defaulted to array of string type.",
        "examples": [
            "array('bojjus', 'gunchus')",
            "['bojjus', 'gunchus']",
            "['bojjus', 'gunchus'][1]",
            "'bojjus'"
        ],
        "parametersDescription": [
            "items"
        ],
        "parametersToAutoComplete": [
            "items"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "toBase64",
        "kind": "functions",
        "description": "Encodes the given string in base64. You can optionally pass the encoding type",
        "examples": [
            "toBase64('bojjus')",
            "'Ym9qanVz'",
            "toBase64('\\xb1 25000, \\u20ac 5.000,- |', 'Windows-1252')",
            "'sSAyNTAwMCwggCA1LjAwMCwtIHw='"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "string"
    },
    {
        "name": "not",
        "kind": "functions",
        "description": "Logical negation operator",
        "examples": [
            "not(true)",
            "false",
            "not(10 == 20)",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "reduce",
        "kind": "functions",
        "description": "Accumulates elements in an array. Reduce expects a reference to an accumulator and one element in the first expression function as #acc and #item and it expects the resulting value as #result to be used in the second expression function",
        "examples": [
            "toString(reduce(['1', '2', '3', '4'], '0', #acc + #item, #result))",
            "'01234'"
        ],
        "parametersDescription": [
            "array",
            "start value",
            "accumulator expression",
            "result expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "start_value",
            "accumulator_expression",
            "result_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "any",
            "binaryfunction",
            "unaryfunction"
        ],
        "requiredParameters": 4,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "translate",
        "kind": "functions",
        "description": "Replace one set of characters by another set of characters in the string. Characters have  1 to 1 replacement",
        "examples": [
            "translate('(bojjus)', '()', '[]')",
            "'[bojjus]'",
            "translate('(gunchus)', '()', '[')",
            "'[gunchus'"
        ],
        "parametersDescription": [
            "string to translate",
            "lookup characters",
            "replace characters"
        ],
        "parametersToAutoComplete": [
            "string_to_translate",
            "lookup_characters",
            "replace_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string",
            "string"
        ],
        "requiredParameters": 3,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "multiply",
        "kind": "functions",
        "description": "Multiplies pair of numbers. Same as the * operator",
        "examples": [
            "multiply(20, 10)",
            "200",
            "20 * 10",
            "200"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "isInsert",
        "kind": "functions",
        "description": "Checks if the row is marked for insert. For transformations taking more than one input stream you can pass the (1-based) index of the stream. The stream index should be either 1 or 2 and the default value is 1",
        "examples": [
            "isInsert()",
            "",
            "isInsert(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "denseRank",
        "kind": "functions",
        "description": "Computes the rank of a value in a group of values. The result is one plus the number of rows preceding or equal to the current row in the ordering of the partition. The values will not produce gaps in the sequence. Dense Rank works even when data is not sorted and looks for change in values",
        "examples": [
            "denseRank()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "Window",
        "returnType": "integer"
    },
    {
        "name": "stddevPopulationIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the population standard deviation of a column",
        "examples": [
            "stddevPopulationIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "greaterOrEqual",
        "kind": "functions",
        "description": "Comparison greater than or equal operator. Same as >= operator",
        "examples": [
            "greaterOrEqual(12, 12)",
            "true",
            "('dumbo' >= 'dum')",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "byOrigin",
        "kind": "functions",
        "description": "Selects a column value by name in the origin stream. The second argument is the origin stream name. If there are multiple matches, the first match is returned. If no match it returns a NULL value. The returned value has to be type converted by one of the type conversion functions(TO_DATE, TO_STRING ...). Column names known at design time should be addressed just by their name. Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "toString(byOrigin('ancestor', 'ancestorStream'))",
            ""
        ],
        "parametersDescription": [
            "column name",
            "origin stream name"
        ],
        "parametersToAutoComplete": [
            "column_name",
            "origin_stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "byOrigins",
        "kind": "functions",
        "description": "Selects an array of columns by name in the stream. The second argument is the stream where it originated from. If there are multiple matches, the first match is returned. If no match it returns a NULL value. The returned value has to be type converted by one of the type conversion functions(TO_DATE, TO_STRING ...) Column names known at design time should be addressed just by their name. Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "toString(byOrigins(['ancestor1', 'ancestor2'], 'ancestorStream'))",
            ""
        ],
        "parametersDescription": [
            "column names",
            "origin stream name"
        ],
        "parametersToAutoComplete": [
            "column_names",
            "origin_stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "byItem",
        "kind": "functions",
        "description": "Find a sub item within a structure or array of structure. If there are multiple matches, the first match is returned. If no match it returns a NULL value. The returned value has to be type converted by one of the type conversion actions(? date, ? string ...). Column names known at design time should be addressed just by their name. Computed inputs are not supported but you can use parameter substitutions.",
        "examples": [
            "byItem( byName('customer'), 'orderItems') ? (itemName as string, itemQty as integer)",
            "",
            "byItem( byItem( byName('customer'), 'orderItems'), 'itemName') ? string",
            ""
        ],
        "parametersDescription": [
            "parent column",
            "column name"
        ],
        "parametersToAutoComplete": [
            "parent column",
            "column name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "byName",
        "kind": "functions",
        "description": "Selects a column value by name in the stream. You can pass an optional stream name as the second argument. If there are multiple matches, the first match is returned. If no match it returns a NULL value. The returned value has to be type converted by one of the type conversion functions(TO_DATE, TO_STRING ...). Column names known at design time should be addressed just by their name. Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "toString(byName('parent'))",
            "",
            "toLong(byName('income'))",
            "",
            "toBoolean(byName('foster'))",
            "",
            "toLong(byName($debtCol))",
            "",
            "toString(byName('Bogus Column'))",
            "",
            "toString(byName('Bogus Column', 'DeriveStream'))",
            ""
        ],
        "parametersDescription": [
            "column name",
            "stream name"
        ],
        "parametersToAutoComplete": [
            "column_name",
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "byNames",
        "kind": "functions",
        "description": "Selects multiple column values by column names in the stream. You can pass an optional stream name as the second argument. If there are multiple matches, the first match is returned. If no match it returns a NULL value. Column names known at design time should be addressed just by their name. Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "md5(byNames(['ID', 'State']))",
            "",
            "array(byNames(['column1', 'column3', 'column5']))",
            ""
        ],
        "parametersDescription": [
            "column names",
            "stream name"
        ],
        "parametersToAutoComplete": [
            "column_names",
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "kurtosisIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the kurtosis of a column",
        "examples": [
            "kurtosisIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "tanh",
        "kind": "functions",
        "description": "Calculates a hyperbolic tangent value",
        "examples": [
            "tanh(0)",
            "0.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "first",
        "kind": "functions",
        "description": "Gets the first value of a column group. If the second parameter ignoreNulls is omitted, it is assumed false",
        "examples": [
            "first(sales)",
            "",
            "first(sales, false)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "boolean"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "any"
    },
    {
        "name": "true",
        "kind": "functions",
        "description": "Always returns a true value. Use the function syntax(true()) if there is a column named 'true'",
        "examples": [
            "(10 + 20 == 30)",
            "true",
            "(10 + 20 == 30)",
            "true()"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "lastDayOfMonth",
        "kind": "functions",
        "description": "Gets the last date of the month given a date",
        "examples": [
            "lastDayOfMonth(toDate('2009-01-12'))",
            "toDate('2009-01-31')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "date"
    },
    {
        "name": "jaroWinkler",
        "kind": "functions",
        "description": "Gets the JaroWrinkler distance between two strings",
        "examples": [
            "jaroWinkler('frog', 'frog')",
            "1.0"
        ],
        "parametersDescription": [
            "from string",
            "to string"
        ],
        "parametersToAutoComplete": [
            "from_string",
            "to_string"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "toDouble",
        "kind": "functions",
        "description": "Converts any numeric or string to a double value. An optional Java decimal format can be used for the conversion. An optional locale format in the form of BCP47 language like en-US, de, zh-CN",
        "examples": [
            "toDouble(123.45)",
            "123.45",
            "toDouble('123.45')",
            "123.45",
            "toDouble('$123.45', '$###.00')",
            "123.45",
            "toDouble('�123,45', '�###,##', 'de')",
            "123.45"
        ],
        "parametersDescription": [
            "value",
            "format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "double"
    },
    {
        "name": "lesser",
        "kind": "functions",
        "description": "Comparison less operator. Same as < operator",
        "examples": [
            "lesser(12, 24)",
            "true",
            "('abcd' < 'abc')",
            "false",
            "(toTimestamp('2019-02-03 05:19:28.871', 'yyyy-MM-dd HH:mm:ss.SSS') < toTimestamp('2019-02-05 08:21:34.890', 'yyyy-MM-dd HH:mm:ss.SSS'))",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "lpad",
        "kind": "functions",
        "description": "Left pads the string by the supplied padding until it is of a certain length. If the string is equal to or greater than the length, then it is trimmed to the length",
        "examples": [
            "lpad('dumbo', 10, '-')",
            "'-----dumbo'",
            "lpad('dumbo', 4, '-')",
            "'dumb'",
            "lpad('dumbo', 8, '<>')",
            "'<><dumbo'"
        ],
        "parametersDescription": [
            "string to pad",
            "final padded length",
            "padding"
        ],
        "parametersToAutoComplete": [
            "string_to_pad",
            "final_padded_length",
            "padding"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "integral",
            "string"
        ],
        "requiredParameters": 3,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "toString",
        "kind": "functions",
        "description": "Converts a primitive datatype to a string. For numbers and date a format can be specified. If unspecified the system default is picked.Java decimal format is used for numbers. Refer to Java SimpleDateFormat for all possible date formats; the default format is yyyy-MM-dd. For timestamp a timezone can be optionally specified. For date or timestamp a locale can be optionally specified.",
        "examples": [
            "toString(10)",
            "'10'",
            "toString('engineer')",
            "'engineer'",
            "toString(123456.789, '##,###.##')",
            "'123,456.79'",
            "toString(123.78, '000000.000')",
            "'000123.780'",
            "toString(12345, '##0.#####E0')",
            "'12.345E3'",
            "toString(toDate('2018-12-31'))",
            "'2018-12-31'",
            "isNull(toString(toDate('2018-12-31', 'MM/dd/yy')))",
            "true",
            "toString(4 == 20)",
            "'false'",
            "toString(toDate('12/31/18', 'MM/dd/yy', 'es-ES'), 'MM/dd/yy', 'de-DE')"
        ],
        "parametersDescription": [
            "value",
            "number format/date format",
            "timezone option",
            "date locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "number_format_or_date_format",
            "timezone_option",
            "date_locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "string"
    },
    {
        "name": "round",
        "kind": "functions",
        "description": "Rounds a number given an optional scale and an optional rounding mode. If the scale is omitted, it is defaulted to 0.  If the mode is omitted, it is defaulted to ROUND_HALF_UP(5). The values for rounding include  \n1 - ROUND_UP  \n2 - ROUND_DOWN  \n3 - ROUND_CEILING  \n4 - ROUND_FLOOR  \n5 - ROUND_HALF_UP  \n6 - ROUND_HALF_DOWN  \n7 - ROUND_HALF_EVEN  \n8 - ROUND_UNNECESSARY  ",
        "examples": [
            "round(100.123)",
            "100.0",
            "round(2.5, 0)",
            "3.0",
            "round(5.3999999999999995, 2, 7)",
            "5.40"
        ],
        "parametersDescription": [
            "number",
            "scale to round",
            "rounding option"
        ],
        "parametersToAutoComplete": [
            "number",
            "scale_to_round",
            "rounding_option"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number",
            "number",
            "integral"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "length",
        "kind": "functions",
        "description": "Returns the length of the string",
        "examples": [
            "length('dumbo')",
            "5"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "integer"
    },
    {
        "name": "toDate",
        "kind": "functions",
        "description": "Converts input date string to date using an optional input date format. Refer to Java's SimpleDateFormat for available formats. If the input date format is omitted, default format is yyyy-[M]M-[d]d. Accepted formats are :[ yyyy, yyyy-[M]M, yyyy-[M]M-[d]d, yyyy-[M]M-[d]dT* ]",
        "examples": [
            "toDate('2012-8-18')",
            "toDate('2012-08-18')",
            "toDate('12/18/2012', 'MM/dd/yyyy', 'en-US')",
            "toDate('2012-12-18')"
        ],
        "parametersDescription": [
            "string",
            "date format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "string",
            "date_format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "date"
    },
    {
        "name": "isUpdate",
        "kind": "functions",
        "description": "Checks if the row is marked for update. For transformations taking more than one input stream you can pass the (1-based) index of the stream. The stream index should be either 1 or 2 and the default value is 1",
        "examples": [
            "isUpdate()",
            "",
            "isUpdate(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "covariancePopulationIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the population covariance of two columns",
        "examples": [
            "covariancePopulationIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number",
            "number"
        ],
        "requiredParameters": 3,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "regexExtract",
        "kind": "functions",
        "description": "Extract a matching substring for a given regex pattern. The last parameter identifies the match group and is defaulted to 1 if omitted. Use `<regex>`(back quote) to match a string without escaping",
        "examples": [
            "regexExtract('Cost is between 600 and 800 dollars', '(\\\\d+) and (\\\\d+)', 2)",
            "'800'",
            "regexExtract('Cost is between 600 and 800 dollars', `(\\d+) and (\\d+)`, 2)",
            "'800'"
        ],
        "parametersDescription": [
            "string",
            "regex to find",
            "match group 1-based index"
        ],
        "parametersToAutoComplete": [
            "string",
            "regex_to_find",
            "match_group_1-based_index"
        ],
        "synonyms": [
            "regex_extract"
        ],
        "inputTypes": [
            "string",
            "string",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "Text",
        "returnType": "string"
    },
    {
        "name": "cosh",
        "kind": "functions",
        "description": "Calculates a hyperbolic cosine of a value",
        "examples": [
            "cosh(0)",
            "1.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "typeMatch",
        "kind": "functions",
        "description": "Matches the type of the column. Can only be used in pattern expressions.number matches short, integer, long, double, float or decimal, integral matches short, integer, long, fractional matches double, float, decimal and datetime matches date or timestamp type",
        "examples": [
            "typeMatch(type, 'number')",
            "",
            "typeMatch('date', 'datetime')",
            ""
        ],
        "parametersDescription": [
            "type",
            "base type"
        ],
        "parametersToAutoComplete": [
            "type",
            "base_type"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "skewness",
        "kind": "functions",
        "description": "Gets the skewness of a column",
        "examples": [
            "skewness(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "rpad",
        "kind": "functions",
        "description": "Right pads the string by the supplied padding until it is of a certain length. If the string is equal to or greater than the length, then it is trimmed to the length",
        "examples": [
            "rpad('dumbo', 10, '-')",
            "'dumbo-----'",
            "rpad('dumbo', 4, '-')",
            "'dumb'",
            "rpad('dumbo', 8, '<>')",
            "'dumbo<><'"
        ],
        "parametersDescription": [
            "string to pad",
            "final padded length",
            "padding"
        ],
        "parametersToAutoComplete": [
            "string_to_pad",
            "final_padded_length",
            "padding"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "integral",
            "string"
        ],
        "requiredParameters": 3,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "substring",
        "kind": "functions",
        "description": "Extracts a substring of a certain length from a position. Position is 1 based. If the length is omitted, it is defaulted to end of the string",
        "examples": [
            "substring('Cat in the hat', 5, 2)",
            "'in'",
            "substring('Cat in the hat', 5, 100)",
            "'in the hat'",
            "substring('Cat in the hat', 5)",
            "'in the hat'",
            "substring('Cat in the hat', 100, 100)",
            "''"
        ],
        "parametersDescription": [
            "string to subset",
            "from 1-based index",
            "number of characters"
        ],
        "parametersToAutoComplete": [
            "string_to_subset",
            "from_1-based_index",
            "number_of_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "integral",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "regexReplace",
        "kind": "functions",
        "description": "Replace all occurrences of a regex pattern with another substring in the given string Use `<regex>`(back quote) to match a string without escaping",
        "examples": [
            "regexReplace('100 and 200', '(\\\\d+)', 'bojjus')",
            "'bojjus and bojjus'",
            "regexReplace('100 and 200', `(\\d+)`, 'gunchus')",
            "'gunchus and gunchus'"
        ],
        "parametersDescription": [
            "string",
            "regex to find",
            "substring to replace"
        ],
        "parametersToAutoComplete": [
            "string",
            "regex_to_find",
            "substring_to_replace"
        ],
        "synonyms": [
            "regex_replace"
        ],
        "inputTypes": [
            "string",
            "string",
            "string"
        ],
        "requiredParameters": 3,
        "functionType": "Text",
        "returnType": "string"
    },
    {
        "name": "power",
        "kind": "functions",
        "description": "Raises one number to the power of another",
        "examples": [
            "power(10, 2)",
            "100"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "case",
        "kind": "functions",
        "description": "Based on alternating conditions applies one value or the other. If the number of inputs are even, the other is defaulted to NULL for last condition",
        "examples": [
            "case(10 + 20 == 30, 'dumbo', 'gumbo')",
            "'dumbo'",
            "case(10 + 20 == 25, 'bojjus', 'do' < 'go', 'gunchus')",
            "'gunchus'",
            "isNull(case(10 + 20 == 25, 'bojjus', 'do' > 'go', 'gunchus'))",
            "true",
            "case(10 + 20 == 25, 'bojjus', 'do' > 'go', 'gunchus', 'dumbo')",
            "'dumbo'"
        ],
        "parametersDescription": [
            "condition",
            "true_expression",
            "false_expression"
        ],
        "parametersToAutoComplete": [
            "condition",
            "true_expression",
            "false_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "any",
            "any"
        ],
        "requiredParameters": 3,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "toShort",
        "kind": "functions",
        "description": "Converts any numeric or string to a short value. An optional Java decimal format can be used for the conversion. Truncates any integer, long, float, double",
        "examples": [
            "toShort(123)",
            "123",
            "toShort('123')",
            "123",
            "toShort('$123', '$###')",
            "123"
        ],
        "parametersDescription": [
            "value",
            "format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "short"
    },
    {
        "name": "toByte",
        "kind": "functions",
        "description": "Converts any numeric or string to a byte value. An optional Java decimal format can be used for the conversion.",
        "examples": [
            "toByte(123)",
            "123",
            "toByte(0xFF)",
            "-1",
            "toByte('123')",
            "123"
        ],
        "parametersDescription": [
            "value",
            "format",
            "locale"
        ],
        "parametersToAutoComplete": [
            "value",
            "format",
            "locale"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "Conversions",
        "returnType": "byte"
    },
    {
        "name": "sort",
        "kind": "functions",
        "description": "Sorts the array using the provided predicate function. Sort expects a reference to two consecutive elements in the expression function as #item1 and #item2",
        "examples": [
            "sort([4, 8, 2, 3], compare(#item1, #item2))",
            "[2, 3, 4, 8]",
            "sort(['a3', 'b2', 'c1'], iif(right(#item1, 1) >= right(#item2, 1), 1, -1))",
            "['c1', 'b2', 'a3']"
        ],
        "parametersDescription": [
            "array",
            "sort expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "sort_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "binaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "type",
        "kind": "functions",
        "description": "Returns the type as described in input/output schemas taking a column name or an expression. Return null if the column is not found",
        "examples": [
            "type(byPosition(1))",
            "",
            "type(byName($colName))",
            "",
            "type(custName)",
            ""
        ],
        "parametersDescription": [
            "column/expression"
        ],
        "parametersToAutoComplete": [
            "column_or_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "trim",
        "kind": "functions",
        "description": "Trims a string of leading and trailing characters. If second parameter is unspecified, it trims whitespace. Else it trims any character specified in the second parameter",
        "examples": [
            "trim('  dumbo  ')",
            "'dumbo'",
            "trim('!--!du!mbo!', '-!')",
            "'du!mbo'"
        ],
        "parametersDescription": [
            "string to trim",
            "trim characters"
        ],
        "parametersToAutoComplete": [
            "string_to_trim",
            "trim_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "byPosition",
        "kind": "functions",
        "description": "Selects a column value by its relative position(1 based) in the stream. If the position is out of bounds it returns a NULL value. The returned value has to be type converted by one of the type conversion functions(TO_DATE, TO_STRING ...)Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "toString(byPosition(1))",
            "",
            "toDecimal(byPosition(2), 10, 2)",
            "",
            "toBoolean(byName(4))",
            "",
            "toString(byName($colName))",
            "",
            "toString(byPosition(1234))",
            ""
        ],
        "parametersDescription": [
            "position"
        ],
        "parametersToAutoComplete": [
            "position"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "hasPath",
        "kind": "functions",
        "description": "Checks if a certain hierarchical path exists by name in the stream. You can pass an optional stream name as the second argument. Column names/paths known at design time should be addressed just by their name or dot notation path. Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "hasPath('grandpa.parent.child')",
            ""
        ],
        "parametersDescription": [
            "column name",
            "stream name"
        ],
        "parametersToAutoComplete": [
            "column_name",
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "byPath",
        "kind": "functions",
        "description": "Finds a hierarchical path by name in the stream. You can pass an optional stream name as the second argument. If no such path is found it returns null. Column names/paths known at design time should be addressed just by their name or dot notation path. Computed inputs are not supported but you can use parameter substitutions",
        "examples": [
            "byPath('grandpa.parent.child')",
            ""
        ],
        "parametersDescription": [
            "column name",
            "stream name"
        ],
        "parametersToAutoComplete": [
            "column_name",
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "tan",
        "kind": "functions",
        "description": "Calculates a tangent value",
        "examples": [
            "tan(0)",
            "0.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "abs",
        "kind": "functions",
        "description": "Absolute value of a number.",
        "examples": [
            "abs(-20)",
            "20",
            "abs(10)",
            "10"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "number"
    },
    {
        "name": "greater",
        "kind": "functions",
        "description": "Comparison greater operator. Same as > operator",
        "examples": [
            "greater(12, 24)",
            "false",
            "('dumbo' > 'dum')",
            "true",
            "(toTimestamp('2019-02-05 08:21:34.890', 'yyyy-MM-dd HH:mm:ss.SSS') > toTimestamp('2019-02-03 05:19:28.871', 'yyyy-MM-dd HH:mm:ss.SSS'))",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "sumIf",
        "kind": "functions",
        "description": "Based on criteria gets the aggregate sum of a numeric column. The condition can be based on any column",
        "examples": [
            "sumIf(state == 'CA' && commission < 10000, sales)",
            "",
            "sumIf(true, sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "contains",
        "kind": "functions",
        "description": "Returns true if any element in the provided array evaluates as true in the provided predicate. Contains expects a reference to one element in the predicate function as #item",
        "examples": [
            "contains([1, 2, 3, 4], #item == 3)",
            "true",
            "contains([1, 2, 3, 4], #item > 5)",
            "false"
        ],
        "parametersDescription": [
            "array",
            "contains expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "contains_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "unaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "keyValues",
        "kind": "functions",
        "description": "Creates a map of key/values. The first parameter is an array of keys and second is the array of values. Both arrays should have equal length.",
        "examples": [
            "keyValues(['bojjus', 'appa'], ['gunchus', 'ammi'])",
            "['bojjus' -> 'gunchus', 'appa' -> 'ammi']",
            "keyValues(['bojjus'], ['gunchus'])['bojjus']",
            "'gunchus'"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "array"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "map"
    },
    {
        "name": "varianceSample",
        "kind": "functions",
        "description": "Gets the unbiased variance of a column",
        "examples": [
            "varianceSample(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "sin",
        "kind": "functions",
        "description": "Calculates a sine value",
        "examples": [
            "sin(2)",
            "0.9092974268256817"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "except",
        "kind": "functions",
        "description": "Returns a difference set of one array from another dropping duplicates",
        "examples": [
            "except([10, 20, 30], [20, 40])",
            "[10, 30]",
            "except(['bojjus', 'gunchus', 'bojjus'], ['gunchus'])",
            "['bojjus']"
        ],
        "parametersDescription": [
            "first array",
            "second array"
        ],
        "parametersToAutoComplete": [
            "first_array",
            "second_array"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "array"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "array"
    },
    {
        "name": "milliseconds",
        "kind": "functions",
        "description": "Duration in milliseconds for number of milliseconds",
        "examples": [
            "milliseconds(2)",
            "2L"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "long"
    },
    {
        "name": "stddevSample",
        "kind": "functions",
        "description": "Gets the sample standard deviation of a column",
        "examples": [
            "stddevSample(sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "add",
        "kind": "functions",
        "description": "Adds a pair of strings or numbers. Adds a date to a number of days. Adds a duration to a timestamp. Appends one array of similar type to another. Same as the + operator",
        "examples": [
            "add(10, 20)",
            "30",
            "10 + 20",
            "30",
            "add('ice', 'cream')",
            "'icecream'",
            "'ice' + 'cream' + ' cone'",
            "'icecream cone'",
            "add(toDate('2012-12-12'), 3)",
            "toDate('2012-12-15')",
            "toDate('2012-12-12') + 3",
            "toDate('2012-12-15')",
            "[10, 20] + [30, 40]",
            "[10, 20, 30, 40]",
            "toTimestamp('2019-02-03 05:19:28.871', 'yyyy-MM-dd HH:mm:ss.SSS') + (days(1) + hours(2) - seconds(10))",
            "toTimestamp('2019-02-04 07:19:18.871', 'yyyy-MM-dd HH:mm:ss.SSS')"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "varianceIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the variance of a column",
        "examples": [
            "varianceIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "skewnessIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the skewness of a column",
        "examples": [
            "skewnessIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "regexMatch",
        "kind": "functions",
        "description": "Checks if the string matches the given regex pattern. Use `<regex>`(back quote) to match a string without escaping",
        "examples": [
            "regexMatch('200.50', '(\\\\d+).(\\\\d+)')",
            "true",
            "regexMatch('200.50', `(\\d+).(\\d+)`)",
            "true"
        ],
        "parametersDescription": [
            "string",
            "regex to match"
        ],
        "parametersToAutoComplete": [
            "string",
            "regex_to_match"
        ],
        "synonyms": [
            "regex_match"
        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "Text",
        "returnType": "boolean"
    },
    {
        "name": "reassociate",
        "kind": "functions",
        "description": "Transforms a map by associating the keys to new values. It takes a mapping function where you can address the item as #key and current value as #value.",
        "examples": [
            "reassociate(['bojjus' -> 'gunchus', 'appa' -> 'ammi'], substring(#key, 1, 1) + substring(#value, 1, 1))",
            "['bojjus' -> 'bg', 'appa' -> 'aa']"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "map",
            "binaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "map"
    },
    {
        "name": "stddevSampleIf",
        "kind": "functions",
        "description": "Based on a criteria, gets the sample standard deviation of a column",
        "examples": [
            "stddevSampleIf(region == 'West', sales)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "number"
        ],
        "requiredParameters": 2,
        "functionType": "Aggregate",
        "returnType": "double"
    },
    {
        "name": "compare",
        "kind": "functions",
        "description": "Compares two values of the same type. Returns negative integer if value1 < value2, 0 if value1 == value2, positive value if value1 > value2",
        "examples": [
            "(compare(12, 24) < 1)",
            "true",
            "(compare('dumbo', 'dum') > 0)",
            "true"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "integer"
    },
    {
        "name": "like",
        "kind": "functions",
        "description": "The pattern is a string that is matched literally. The exceptions are the following special symbols:  _ matches any one character in the input (similar to . in posix regular expressions) \n  % matches zero or more characters in the input (similar to .* in posix regular expressions).\n  The escape character is ''. If an escape character precedes a special symbol or another escape character, the following character is matched literally. It is invalid to escape any other character.",
        "examples": [
            "like('icecream', 'ice%')",
            "true"
        ],
        "parametersDescription": [
            "string",
            "pattern match"
        ],
        "parametersToAutoComplete": [
            "string",
            "pattern_match"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "sum",
        "kind": "functions",
        "description": "Gets the aggregate sum of a numeric column",
        "examples": [
            "sum(col)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "number"
    },
    {
        "name": "log",
        "kind": "functions",
        "description": "Calculates log value. An optional base can be supplied else a euler number if used",
        "examples": [
            "log(100, 10)",
            "2"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number",
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "and",
        "kind": "functions",
        "description": "Logical AND operator. Same as &&",
        "examples": [
            "and(true, false)",
            "false",
            "true && false",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "boolean",
            "boolean"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "currentDate",
        "kind": "functions",
        "description": "Gets the current date when this job starts to run. You can pass an optional timezone in the form of 'GMT', 'PST', 'UTC', 'America/Cayman'. The local timezone is used as the default. Refer to Java's SimpleDateFormat for available formats.",
        "examples": [
            "currentDate() == toDate('2250-12-31')",
            "false",
            "currentDate('PST')  == toDate('2250-12-31')",
            "false",
            "currentDate('America/New_York')  == toDate('2250-12-31')",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 0,
        "functionType": "General",
        "returnType": "date"
    },
    {
        "name": "locate",
        "kind": "functions",
        "description": "Finds the position(1 based) of the substring within a string starting a certain position. If the position is omitted it is considered from the beginning of the string. 0 is returned if not found",
        "examples": [
            "locate('mbo', 'dumbo')",
            "3",
            "locate('o', 'microsoft', 6)",
            "7",
            "locate('bad', 'good')",
            "0"
        ],
        "parametersDescription": [
            "substring to find",
            "string",
            "from index - 1-based"
        ],
        "parametersToAutoComplete": [
            "substring_to_find",
            "string",
            "from_index_-_1-based"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "string",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "integer"
    },
    {
        "name": "originColumns",
        "kind": "functions",
        "description": "Gets all output columns for a origin stream where columns were created.",
        "examples": [
            "columns()",
            "",
            "columns('DeriveStream')",
            ""
        ],
        "parametersDescription": [
            "stream name"
        ],
        "parametersToAutoComplete": [
            "stream_name"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "any"
    },
    {
        "name": "right",
        "kind": "functions",
        "description": "Extracts a substring with number of characters from the right. Same as SUBSTRING(str, LENGTH(str) - n, n)",
        "examples": [
            "right('bojjus', 2)",
            "'us'",
            "right('bojjus', 20)",
            "'bojjus'"
        ],
        "parametersDescription": [
            "string to subset",
            "number of characters"
        ],
        "parametersToAutoComplete": [
            "string_to_subset",
            "number_of_characters"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "string",
            "integral"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "string"
    },
    {
        "name": "acos",
        "kind": "functions",
        "description": "Calculates a cosine inverse value",
        "examples": [
            "acos(1)",
            "0.0"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "double"
    },
    {
        "name": "cumeDist",
        "kind": "functions",
        "description": "The CumeDist function computes the position of a value relative to all values in the partition. The result is the number of rows preceding or equal to the current row in the ordering of the partition divided by the total number of rows in the window partition. Any tie values in the  ordering will evaluate to the same position.",
        "examples": [
            "cumeDist()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "Window",
        "returnType": "integer"
    },
    {
        "name": "days",
        "kind": "functions",
        "description": "Duration in milliseconds for number of days",
        "examples": [
            "days(2)",
            "172800000L"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "integer"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "long"
    },
    {
        "name": "month",
        "kind": "functions",
        "description": "Gets the month value of a date or timestamp",
        "examples": [
            "month(toDate('2012-8-8'))",
            "8"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "datetime"
        ],
        "requiredParameters": 1,
        "functionType": "Datetime",
        "returnType": "integer"
    },
    {
        "name": "notEquals",
        "kind": "functions",
        "description": "Comparison not equals operator. Same as != operator",
        "examples": [
            "12 != 24",
            "true",
            "'bojjus' != 'bo' + 'jjus'",
            "false"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any",
            "any"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "boolean"
    },
    {
        "name": "collect",
        "kind": "functions",
        "description": "Collects all values of the expression in the aggregated group into a array. Structures can be collected and transformed to alternate structures during this process. The number of items will be equal to the number of rows in that group and can contain null values. The number of collected items should be small",
        "examples": [
            "collect(salesPerson)",
            "",
            "collect(firstName + lastName))",
            "",
            "collect(@(name = salesPerson, sales = salesAmount) )",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Aggregate",
        "returnType": "array"
    },
    {
        "name": "random",
        "kind": "functions",
        "description": "Returns a random number given an optional seed within a partition. The seed should be a fixed value and is used in conjunction with the partitionId to produce random values",
        "examples": [
            "random(1)",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [
            "seed"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "number"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "long"
    },
    {
        "name": "size",
        "kind": "functions",
        "description": "Returns the size of an array or map type",
        "examples": [
            "size(['bojjus', 'gunchus'])",
            "2",
            "size(['bojus' -> 'guhus', 'appa' -> 'ammi'])",
            "2"
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [
            "array"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array"
        ],
        "requiredParameters": 1,
        "functionType": "General",
        "returnType": "integer"
    },
    {
        "name": "lookup",
        "kind": "functions",
        "description": "Looks up (first row) the specified keys in the cache sink",
        "examples": [
            "cacheSink1#lookup(key1,key2)",
            "",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Transformation",
        "returnType": "complex"
    },
    {
        "name": "mlookup",
        "kind": "functions",
        "description": "Looks up the specified keys in the cache sink",
        "examples": [
            "cacheSink1#mlookup(key1,key2)",
            "",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [
            "any"
        ],
        "requiredParameters": 1,
        "functionType": "Transformation",
        "returnType": "complex"
    },
    {
        "name": "outputs",
        "kind": "functions",
        "description": "Returns the outputs of the cache sink",
        "examples": [
            "cacheSink1#outputs()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "Transformation",
        "returnType": "array"
    },
    {
        "name": "output",
        "kind": "functions",
        "description": "Returns the first row from output of the cache sink",
        "examples": [
            "cacheSink1#output()",
            ""
        ],
        "parametersDescription": [

        ],
        "parametersToAutoComplete": [

        ],
        "synonyms": [

        ],
        "inputTypes": [

        ],
        "requiredParameters": 0,
        "functionType": "Transformation",
        "returnType": "complex"
    },
    {
        "name": "find",
        "kind": "functions",
        "description": "Find the first item from an array that match the condition. It takes a filter function where you can address the item in the array as #item. For deeply nested maps you can refer to the parent maps using the #item_n(#item_1, #item_2...) notation.",
        "examples": [
            "find([10, 20, 30], #item > 10)",
            "20",
            "find(['bojjus', 'gunchus', 'ammi'], length(#item) > 4)",
            "'bojjus'"
        ],
        "parametersDescription": [
            "array",
            "find expression"
        ],
        "parametersToAutoComplete": [
            "array",
            "find_expression"
        ],
        "synonyms": [

        ],
        "inputTypes": [
            "array",
            "unaryfunction"
        ],
        "requiredParameters": 2,
        "functionType": "General",
        "returnType": "any"
    }
]