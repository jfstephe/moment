var _date;if (typeof window === 'undefined') {_date = require('../underscore.date.js');module = QUnit.module;}
/**************************************************
  English
 *************************************************/

module("lang:en");

test("format", 15, function() {
    _date.lang('en');
    var a = [
            ['dddd, MMMM Do YYYY, h:mm:ss a',      'Sunday, February 14th 2010, 3:25:50 pm'],
            ['ddd, hA',                            'Sun, 3PM'],
            ['M Mo MM MMMM MMM',                   '2 2nd 02 February Feb'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14th 14'],
            ['d do dddd ddd',                      '0 0th Sunday Sun'],
            ['DDD DDDo DDDD',                      '45 45th 045'],
            ['w wo ww',                            '8 8th 08'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['z zz',                               'PST PST'],
            ['t\\he DDDo \\d\\ay of t\\he ye\\ar', 'the 45th day of the year']
        ],
        b = _date(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test("format ordinal", 31, function() {
    _date.lang('en');
    equal(_date([2011, 0, 1]).format('DDDo'), '1st', '1st');
    equal(_date([2011, 0, 2]).format('DDDo'), '2nd', '2nd');
    equal(_date([2011, 0, 3]).format('DDDo'), '3rd', '3rd');
    equal(_date([2011, 0, 4]).format('DDDo'), '4th', '4th');
    equal(_date([2011, 0, 5]).format('DDDo'), '5th', '5th');
    equal(_date([2011, 0, 6]).format('DDDo'), '6th', '6th');
    equal(_date([2011, 0, 7]).format('DDDo'), '7th', '7th');
    equal(_date([2011, 0, 8]).format('DDDo'), '8th', '8th');
    equal(_date([2011, 0, 9]).format('DDDo'), '9th', '9th');
    equal(_date([2011, 0, 10]).format('DDDo'), '10th', '10th');

    equal(_date([2011, 0, 11]).format('DDDo'), '11th', '11th');
    equal(_date([2011, 0, 12]).format('DDDo'), '12th', '12th');
    equal(_date([2011, 0, 13]).format('DDDo'), '13th', '13th');
    equal(_date([2011, 0, 14]).format('DDDo'), '14th', '14th');
    equal(_date([2011, 0, 15]).format('DDDo'), '15th', '15th');
    equal(_date([2011, 0, 16]).format('DDDo'), '16th', '16th');
    equal(_date([2011, 0, 17]).format('DDDo'), '17th', '17th');
    equal(_date([2011, 0, 18]).format('DDDo'), '18th', '18th');
    equal(_date([2011, 0, 19]).format('DDDo'), '19th', '19th');
    equal(_date([2011, 0, 20]).format('DDDo'), '20th', '20th');

    equal(_date([2011, 0, 21]).format('DDDo'), '21st', '21st');
    equal(_date([2011, 0, 22]).format('DDDo'), '22nd', '22nd');
    equal(_date([2011, 0, 23]).format('DDDo'), '23rd', '23rd');
    equal(_date([2011, 0, 24]).format('DDDo'), '24th', '24th');
    equal(_date([2011, 0, 25]).format('DDDo'), '25th', '25th');
    equal(_date([2011, 0, 26]).format('DDDo'), '26th', '26th');
    equal(_date([2011, 0, 27]).format('DDDo'), '27th', '27th');
    equal(_date([2011, 0, 28]).format('DDDo'), '28th', '28th');
    equal(_date([2011, 0, 29]).format('DDDo'), '29th', '29th');
    equal(_date([2011, 0, 30]).format('DDDo'), '30th', '30th');

    equal(_date([2011, 0, 31]).format('DDDo'), '31st', '31st');
});

test("format month", 12, function() {
    _date.lang('en');
    var expected = 'January Jan_February Feb_March Mar_April Apr_May May_June Jun_July Jul_August Aug_September Sep_October Oct_November Nov_December Dec'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(_date([2011, i, 0]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test("format week", 7, function() {
    _date.lang('en');
    var expected = 'Sunday Sun_Monday Mon_Tuesday Tue_Wednesday Wed_Thursday Thu_Friday Fri_Saturday Sat'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(_date([2011, 0, 2 + i]).format('dddd ddd'), expected[i], expected[i]);
    }
});

test("from", 30, function() {
    _date.lang('en');
    var start = _date([2007, 1, 28]);
    equal(start.from(_date([2007, 1, 28]).add({s:44}), true),  "seconds",    "44 seconds = seconds");
    equal(start.from(_date([2007, 1, 28]).add({s:45}), true),  "a minute",   "45 seconds = a minute");
    equal(start.from(_date([2007, 1, 28]).add({s:89}), true),  "a minute",   "89 seconds = a minute");
    equal(start.from(_date([2007, 1, 28]).add({s:90}), true),  "2 minutes",  "90 seconds = 2 minutes");
    equal(start.from(_date([2007, 1, 28]).add({m:44}), true),  "44 minutes", "44 minutes = 44 minutes");
    equal(start.from(_date([2007, 1, 28]).add({m:45}), true),  "an hour",    "45 minutes = an hour");
    equal(start.from(_date([2007, 1, 28]).add({m:89}), true),  "an hour",    "89 minutes = an hour");
    equal(start.from(_date([2007, 1, 28]).add({m:90}), true),  "2 hours",    "90 minutes = 2 hours");
    equal(start.from(_date([2007, 1, 28]).add({h:5}), true),   "5 hours",    "5 hours = 5 hours");
    equal(start.from(_date([2007, 1, 28]).add({h:21}), true),  "21 hours",   "21 hours = 21 hours");
    equal(start.from(_date([2007, 1, 28]).add({h:22}), true),  "a day",      "22 hours = a day");
    equal(start.from(_date([2007, 1, 28]).add({h:35}), true),  "a day",      "35 hours = a day");
    equal(start.from(_date([2007, 1, 28]).add({h:36}), true),  "2 days",     "36 hours = 2 days");
    equal(start.from(_date([2007, 1, 28]).add({d:1}), true),   "a day",      "1 day = a day");
    equal(start.from(_date([2007, 1, 28]).add({d:5}), true),   "5 days",     "5 days = 5 days");
    equal(start.from(_date([2007, 1, 28]).add({d:25}), true),  "25 days",    "25 days = 25 days");
    equal(start.from(_date([2007, 1, 28]).add({d:26}), true),  "a month",    "26 days = a month");
    equal(start.from(_date([2007, 1, 28]).add({d:30}), true),  "a month",    "30 days = a month");
    equal(start.from(_date([2007, 1, 28]).add({d:45}), true),  "a month",    "45 days = a month");
    equal(start.from(_date([2007, 1, 28]).add({d:46}), true),  "2 months",   "46 days = 2 months");
    equal(start.from(_date([2007, 1, 28]).add({d:75}), true),  "2 months",   "75 days = 2 months");
    equal(start.from(_date([2007, 1, 28]).add({d:76}), true),  "3 months",   "76 days = 3 months");
    equal(start.from(_date([2007, 1, 28]).add({M:1}), true),   "a month",    "1 month = a month");
    equal(start.from(_date([2007, 1, 28]).add({M:5}), true),   "5 months",   "5 months = 5 months");
    equal(start.from(_date([2007, 1, 28]).add({d:344}), true), "11 months",  "344 days = 11 months");
    equal(start.from(_date([2007, 1, 28]).add({d:345}), true), "a year",     "345 days = a year");
    equal(start.from(_date([2007, 1, 28]).add({d:547}), true), "a year",     "547 days = a year");
    equal(start.from(_date([2007, 1, 28]).add({d:548}), true), "2 years",    "548 days = 2 years");
    equal(start.from(_date([2007, 1, 28]).add({y:1}), true),   "a year",     "1 year = a year");
    equal(start.from(_date([2007, 1, 28]).add({y:5}), true),   "5 years",    "5 years = 5 years");
});

test("suffix", 2, function() {
    _date.lang('en');
    equal(_date(30000).from(0), "in seconds", "prefix");
    equal(_date(0).from(30000), "seconds ago", "suffix");
});

test("fromNow", 2, function() {
    _date.lang('en');
    equal(_date().add({s:30}).fromNow(), "in seconds", "in seconds");
    equal(_date().add({d:5}).fromNow(), "in 5 days", "in 5 days");
});

/**************************************************
  Portuguese
 *************************************************/

module("lang:pt");

test("format", 15, function() {
    _date.lang('pt');
    var a = [
            ['dddd, MMMM Do YYYY, h:mm:ss a',      'Domingo, Fevereiro 14º 2010, 3:25:50 pm'],
            ['ddd, hA',                            'Dom, 3PM'],
            ['M Mo MM MMMM MMM',                   '2 2º 02 Fevereiro Feb'],
            ['YYYY YY',                            '2010 10'],
            ['D Do DD',                            '14 14º 14'],
            ['d do dddd ddd',                      '0 0º Domingo Dom'],
            ['DDD DDDo DDDD',                      '45 45º 045'],
            ['w wo ww',                            '8 8º 08'],
            ['h hh',                               '3 03'],
            ['H HH',                               '15 15'],
            ['m mm',                               '25 25'],
            ['s ss',                               '50 50'],
            ['a A',                                'pm PM'],
            ['z zz',                               'PST PST'],
            ['t\\he DDDo \\d\\ay of t\\he ye\\ar', 'the 45º day of the year']
        ],
        b = _date(new Date(2010, 1, 14, 15, 25, 50, 125)),
        i;
    for (i = 0; i < a.length; i++) {
        equal(b.format(a[i][0]), a[i][1], a[i][0] + ' ---> ' + a[i][1]);
    }
});

test("format ordinal", 31, function() {
    _date.lang('pt');
    equal(_date([2011, 0, 1]).format('DDDo'), '1º', '1º');
    equal(_date([2011, 0, 2]).format('DDDo'), '2º', '2º');
    equal(_date([2011, 0, 3]).format('DDDo'), '3º', '3º');
    equal(_date([2011, 0, 4]).format('DDDo'), '4º', '4º');
    equal(_date([2011, 0, 5]).format('DDDo'), '5º', '5º');
    equal(_date([2011, 0, 6]).format('DDDo'), '6º', '6º');
    equal(_date([2011, 0, 7]).format('DDDo'), '7º', '7º');
    equal(_date([2011, 0, 8]).format('DDDo'), '8º', '8º');
    equal(_date([2011, 0, 9]).format('DDDo'), '9º', '9º');
    equal(_date([2011, 0, 10]).format('DDDo'), '10º', '10º');

    equal(_date([2011, 0, 11]).format('DDDo'), '11º', '11º');
    equal(_date([2011, 0, 12]).format('DDDo'), '12º', '12º');
    equal(_date([2011, 0, 13]).format('DDDo'), '13º', '13º');
    equal(_date([2011, 0, 14]).format('DDDo'), '14º', '14º');
    equal(_date([2011, 0, 15]).format('DDDo'), '15º', '15º');
    equal(_date([2011, 0, 16]).format('DDDo'), '16º', '16º');
    equal(_date([2011, 0, 17]).format('DDDo'), '17º', '17º');
    equal(_date([2011, 0, 18]).format('DDDo'), '18º', '18º');
    equal(_date([2011, 0, 19]).format('DDDo'), '19º', '19º');
    equal(_date([2011, 0, 20]).format('DDDo'), '20º', '20º');

    equal(_date([2011, 0, 21]).format('DDDo'), '21º', '21º');
    equal(_date([2011, 0, 22]).format('DDDo'), '22º', '22º');
    equal(_date([2011, 0, 23]).format('DDDo'), '23º', '23º');
    equal(_date([2011, 0, 24]).format('DDDo'), '24º', '24º');
    equal(_date([2011, 0, 25]).format('DDDo'), '25º', '25º');
    equal(_date([2011, 0, 26]).format('DDDo'), '26º', '26º');
    equal(_date([2011, 0, 27]).format('DDDo'), '27º', '27º');
    equal(_date([2011, 0, 28]).format('DDDo'), '28º', '28º');
    equal(_date([2011, 0, 29]).format('DDDo'), '29º', '29º');
    equal(_date([2011, 0, 30]).format('DDDo'), '30º', '30º');

    equal(_date([2011, 0, 31]).format('DDDo'), '31º', '31º');
});

test("format month", 12, function() {
    _date.lang('pt');
    var expected = 'Janeiro Jan_Fevereiro Feb_Março Mar_Abril Abr_Maio Mai_Junho Jun_Julho Jul_Agosto Ago_Setembro Set_Outubro Out_Novembro Nov_Dezembro Dez'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(_date([2011, i, 0]).format('MMMM MMM'), expected[i], expected[i]);
    }
});

test("format week", 7, function() {
    _date.lang('pt');
    var expected = 'Domingo Dom_Segunda-feira Seg_Terça-feira Ter_Quarta-feira Qua_Quinta-feira Qui_Sexta-feira Sex_Sábado Sáb'.split("_");
    var i;
    for (i = 0; i < expected.length; i++) {
        equal(_date([2011, 0, 2 + i]).format('dddd ddd'), expected[i], expected[i]);
    }
});

test("from", 30, function() {
    _date.lang('pt');
    var start = _date([2007, 1, 28]);
    equal(start.from(_date([2007, 1, 28]).add({s:44}), true),  "segundos",    "44 seconds = seconds");
    equal(start.from(_date([2007, 1, 28]).add({s:45}), true),  "um minuto",   "45 seconds = a minute");
    equal(start.from(_date([2007, 1, 28]).add({s:89}), true),  "um minuto",   "89 seconds = a minute");
    equal(start.from(_date([2007, 1, 28]).add({s:90}), true),  "2 minutos",  "90 seconds = 2 minutes");
    equal(start.from(_date([2007, 1, 28]).add({m:44}), true),  "44 minutos", "44 minutes = 44 minutes");
    equal(start.from(_date([2007, 1, 28]).add({m:45}), true),  "uma hora",    "45 minutes = an hour");
    equal(start.from(_date([2007, 1, 28]).add({m:89}), true),  "uma hora",    "89 minutes = an hour");
    equal(start.from(_date([2007, 1, 28]).add({m:90}), true),  "2 horas",    "90 minutes = 2 hours");
    equal(start.from(_date([2007, 1, 28]).add({h:5}), true),   "5 horas",    "5 hours = 5 hours");
    equal(start.from(_date([2007, 1, 28]).add({h:21}), true),  "21 horas",   "21 hours = 21 hours");
    equal(start.from(_date([2007, 1, 28]).add({h:22}), true),  "um dia",      "22 hours = a day");
    equal(start.from(_date([2007, 1, 28]).add({h:35}), true),  "um dia",      "35 hours = a day");
    equal(start.from(_date([2007, 1, 28]).add({h:36}), true),  "2 dias",     "36 hours = 2 days");
    equal(start.from(_date([2007, 1, 28]).add({d:1}), true),   "um dia",      "1 day = a day");
    equal(start.from(_date([2007, 1, 28]).add({d:5}), true),   "5 dias",     "5 days = 5 days");
    equal(start.from(_date([2007, 1, 28]).add({d:25}), true),  "25 dias",    "25 days = 25 days");
    equal(start.from(_date([2007, 1, 28]).add({d:26}), true),  "um mês",    "26 days = a month");
    equal(start.from(_date([2007, 1, 28]).add({d:30}), true),  "um mês",    "30 days = a month");
    equal(start.from(_date([2007, 1, 28]).add({d:45}), true),  "um mês",    "45 days = a month");
    equal(start.from(_date([2007, 1, 28]).add({d:46}), true),  "2 meses",   "46 days = 2 months");
    equal(start.from(_date([2007, 1, 28]).add({d:75}), true),  "2 meses",   "75 days = 2 months");
    equal(start.from(_date([2007, 1, 28]).add({d:76}), true),  "3 meses",   "76 days = 3 months");
    equal(start.from(_date([2007, 1, 28]).add({M:1}), true),   "um mês",    "1 month = a month");
    equal(start.from(_date([2007, 1, 28]).add({M:5}), true),   "5 meses",   "5 months = 5 months");
    equal(start.from(_date([2007, 1, 28]).add({d:344}), true), "11 meses",  "344 days = 11 months");
    equal(start.from(_date([2007, 1, 28]).add({d:345}), true), "um ano",     "345 days = a year");
    equal(start.from(_date([2007, 1, 28]).add({d:547}), true), "um ano",     "547 days = a year");
    equal(start.from(_date([2007, 1, 28]).add({d:548}), true), "2 anos",    "548 days = 2 years");
    equal(start.from(_date([2007, 1, 28]).add({y:1}), true),   "um ano",     "1 year = a year");
    equal(start.from(_date([2007, 1, 28]).add({y:5}), true),   "5 anos",    "5 years = 5 years");
});

test("suffix", 2, function() {
    _date.lang('pt');
    equal(_date(30000).from(0), "em segundos", "prefix");
    equal(_date(0).from(30000), "segundos atrás", "suffix");
});

test("fromNow", 2, function() {
    _date.lang('pt');
    equal(_date().add({s:30}).fromNow(), "em segundos", "in seconds");
    equal(_date().add({d:5}).fromNow(), "em 5 dias", "in 5 days");
});
