
// Number input field with country code


// 253 countries
const countries = [
    {name: "Afghanistan", code: "AF", phone: 93},
    {name: "Aland Islands", code: "AX", phone: 358},
    {name: "Albania", code: "AL", phone: 355},
    {name: "Algeria", code: "DZ", phone: 213},
    {name: "American Samoa", code: "AS", phone: 1684},
    {name: "Andorra", code: "AD", phone: 376},
    {name: "Angola", code: "AO", phone: 244},
    {name: "Anguilla", code: "AI", phone: 1264},
    {name: "Antarctica", code: "AQ", phone: 672},
    {name: "Antigua and Barbuda", code: "AG", phone: 1268},
    {name: "Argentina", code: "AR", phone: 54},
    {name: "Armenia", code: "AM", phone: 374},
    {name: "Aruba", code: "AW", phone: 297},
    {name: "Australia", code: "AU", phone: 61},
    {name: "Austria", code: "AT", phone: 43},
    {name: "Azerbaijan", code: "AZ", phone: 994},
    {name: "Bahamas", code: "BS", phone: 1242},
    {name: "Bahrain", code: "BH", phone: 973},
    {name: "Bangladesh", code: "BD", phone: 880},
    {name: "Barbados", code: "BB", phone: 1246},
    {name: "Belarus", code: "BY", phone: 375},
    {name: "Belgium", code: "BE", phone: 32},
    {name: "Belize", code: "BZ", phone: 501},
    {name: "Benin", code: "BJ", phone: 229},
    {name: "Bermuda", code: "BM", phone: 1441},
    {name: "Bhutan", code: "BT", phone: 975},
    {name: "Bolivia", code: "BO", phone: 591},
    {name: "Bonaire, Sint Eustatius and Saba", code: "BQ", phone: 599},
    {name: "Bosnia and Herzegovina", code: "BA", phone: 387},
    {name: "Botswana", code: "BW", phone: 267},
    {name: "Bouvet Island", code: "BV", phone: 55},
    {name: "Brazil", code: "BR", phone: 55},
    {name: "British Indian Ocean Territory", code: "IO", phone: 246},
    {name: "Brunei Darussalam", code: "BN", phone: 673},
    {name: "Bulgaria", code: "BG", phone: 359},
    {name: "Burkina Faso", code: "BF", phone: 226},
    {name: "Burundi", code: "BI", phone: 257},
    {name: "Cambodia", code: "KH", phone: 855},
    {name: "Cameroon", code: "CM", phone: 237},
    {name: "Canada", code: "CA", phone: 1},
    {name: "Cape Verde", code: "CV", phone: 238},
    {name: "Cayman Islands", code: "KY", phone: 1345},
    {name: "Central African Republic", code: "CF", phone: 236},
    {name: "Chad", code: "TD", phone: 235},
    {name: "Chile", code: "CL", phone: 56},
    {name: "China", code: "CN", phone: 86},
    {name: "Christmas Island", code: "CX", phone: 61},
    {name: "Cocos (Keeling) Islands", code: "CC", phone: 672},
    {name: "Colombia", code: "CO", phone: 57},
    {name: "Comoros", code: "KM", phone: 269},
    {name: "Congo", code: "CG", phone: 242},
    {name: "Congo, Democratic Republic of the Congo", code: "CD", phone: 242},
    {name: "Cook Islands", code: "CK", phone: 682},
    {name: "Costa Rica", code: "CR", phone: 506},
    {name: "Cote D'Ivoire", code: "CI", phone: 225},
    {name: "Croatia", code: "HR", phone: 385},
    {name: "Cuba", code: "CU", phone: 53},
    {name: "Curacao", code: "CW", phone: 599},
    {name: "Cyprus", code: "CY", phone: 357},
    {name: "Czech Republic", code: "CZ", phone: 420},
    {name: "Denmark", code: "DK", phone: 45},
    {name: "Djibouti", code: "DJ", phone: 253},
    {name: "Dominica", code: "DM", phone: 1767},
    {name: "Dominican Republic", code: "DO", phone: 1809},
    {name: "Ecuador", code: "EC", phone: 593},
    {name: "Egypt", code: "EG", phone: 20},
    {name: "El Salvador", code: "SV", phone: 503},
    {name: "Equatorial Guinea", code: "GQ", phone: 240},
    {name: "Eritrea", code: "ER", phone: 291},
    {name: "Estonia", code: "EE", phone: 372},
    {name: "Ethiopia", code: "ET", phone: 251},
    {name: "Falkland Islands (Malvinas)", code: "FK", phone: 500},
    {name: "Faroe Islands", code: "FO", phone: 298},
    {name: "Fiji", code: "FJ", phone: 679},
    {name: "Finland", code: "FI", phone: 358},
    {name: "France", code: "FR", phone: 33},
    {name: "French Guiana", code: "GF", phone: 594},
    {name: "French Polynesia", code: "PF", phone: 689},
    {name: "French Southern Territories", code: "TF", phone: 262},
    {name: "Gabon", code: "GA", phone: 241},
    {name: "Gambia", code: "GM", phone: 220},
    {name: "Georgia", code: "GE", phone: 995},
    {name: "Germany", code: "DE", phone: 49},
    {name: "Ghana", code: "GH", phone: 233},
    {name: "Gibraltar", code: "GI", phone: 350},
    {name: "Greece", code: "GR", phone: 30},
    {name: "Greenland", code: "GL", phone: 299},
    {name: "Grenada", code: "GD", phone: 1473},
    {name: "Guadeloupe", code: "GP", phone: 590},
    {name: "Guam", code: "GU", phone: 1671},
    {name: "Guatemala", code: "GT", phone: 502},
    {name: "Guernsey", code: "GG", phone: 44},
    {name: "Guinea", code: "GN", phone: 224},
    {name: "Guinea-Bissau", code: "GW", phone: 245},
    {name: "Guyana", code: "GY", phone: 592},
    {name: "Haiti", code: "HT", phone: 509},
    {name: "Heard Island and McDonald Islands", code: "HM", phone: 0},
    {name: "Holy See (Vatican City State)", code: "VA", phone: 39},
    {name: "Honduras", code: "HN", phone: 504},
    {name: "Hong Kong", code: "HK", phone: 852},
    {name: "Hungary", code: "HU", phone: 36},
    {name: "Iceland", code: "IS", phone: 354},
    {name: "India", code: "IN", phone: 91},
    {name: "Indonesia", code: "ID", phone: 62},
    {name: "Iran, Islamic Republic of", code: "IR", phone: 98},
    {name: "Iraq", code: "IQ", phone: 964},
    {name: "Ireland", code: "IE", phone: 353},
    {name: "Isle of Man", code: "IM", phone: 44},
    {name: "Israel", code: "IL", phone: 972},
    {name: "Italy", code: "IT", phone: 39},
    {name: "Jamaica", code: "JM", phone: 1876},
    {name: "Japan", code: "JP", phone: 81},
    {name: "Jersey", code: "JE", phone: 44},
    {name: "Jordan", code: "JO", phone: 962},
    {name: "Kazakhstan", code: "KZ", phone: 7},
    {name: "Kenya", code: "KE", phone: 254},
    {name: "Kiribati", code: "KI", phone: 686},
    {name: "Korea, Democratic People's Republic of", code: "KP", phone: 850},
    {name: "Korea, Republic of", code: "KR", phone: 82},
    {name: "Kosovo", code: "XK", phone: 383},
    {name: "Kuwait", code: "KW", phone: 965},
    {name: "Kyrgyzstan", code: "KG", phone: 996},
    {name: "Lao People's Democratic Republic", code: "LA", phone: 856},
    {name: "Latvia", code: "LV", phone: 371},
    {name: "Lebanon", code: "LB", phone: 961},
    {name: "Lesotho", code: "LS", phone: 266},
    {name: "Liberia", code: "LR", phone: 231},
    {name: "Libyan Arab Jamahiriya", code: "LY", phone: 218},
    {name: "Liechtenstein", code: "LI", phone: 423},
    {name: "Lithuania", code: "LT", phone: 370},
    {name: "Luxembourg", code: "LU", phone: 352},
    {name: "Macao", code: "MO", phone: 853},
    {name: "Macedonia, the Former Yugoslav Republic of", code: "MK", phone: 389},
    {name: "Madagascar", code: "MG", phone: 261},
    {name: "Malawi", code: "MW", phone: 265},
    {name: "Malaysia", code: "MY", phone: 60},
    {name: "Maldives", code: "MV", phone: 960},
    {name: "Mali", code: "ML", phone: 223},
    {name: "Malta", code: "MT", phone: 356},
    {name: "Marshall Islands", code: "MH", phone: 692},
    {name: "Martinique", code: "MQ", phone: 596},
    {name: "Mauritania", code: "MR", phone: 222},
    {name: "Mauritius", code: "MU", phone: 230},
    {name: "Mayotte", code: "YT", phone: 262},
    {name: "Mexico", code: "MX", phone: 52},
    {name: "Micronesia, Federated States of", code: "FM", phone: 691},
    {name: "Moldova, Republic of", code: "MD", phone: 373},
    {name: "Monaco", code: "MC", phone: 377},
    {name: "Mongolia", code: "MN", phone: 976},
    {name: "Montenegro", code: "ME", phone: 382},
    {name: "Montserrat", code: "MS", phone: 1664},
    {name: "Morocco", code: "MA", phone: 212},
    {name: "Mozambique", code: "MZ", phone: 258},
    {name: "Myanmar", code: "MM", phone: 95},
    {name: "Namibia", code: "NA", phone: 264},
    {name: "Nauru", code: "NR", phone: 674},
    {name: "Nepal", code: "NP", phone: 977},
    {name: "Netherlands", code: "NL", phone: 31},
    {name: "Netherlands Antilles", code: "AN", phone: 599},
    {name: "New Caledonia", code: "NC", phone: 687},
    {name: "New Zealand", code: "NZ", phone: 64},
    {name: "Nicaragua", code: "NI", phone: 505},
    {name: "Niger", code: "NE", phone: 227},
    {name: "Nigeria", code: "NG", phone: 234},
    {name: "Niue", code: "NU", phone: 683},
    {name: "Norfolk Island", code: "NF", phone: 672},
    {name: "Northern Mariana Islands", code: "MP", phone: 1670},
    {name: "Norway", code: "NO", phone: 47},
    {name: "Oman", code: "OM", phone: 968},
    {name: "Pakistan", code: "PK", phone: 92},
    {name: "Palau", code: "PW", phone: 680},
    {name: "Palestinian Territory, Occupied", code: "PS", phone: 970},
    {name: "Panama", code: "PA", phone: 507},
    {name: "Papua New Guinea", code: "PG", phone: 675},
    {name: "Paraguay", code: "PY", phone: 595},
    {name: "Peru", code: "PE", phone: 51},
    {name: "Philippines", code: "PH", phone: 63},
    {name: "Pitcairn", code: "PN", phone: 64},
    {name: "Poland", code: "PL", phone: 48},
    {name: "Portugal", code: "PT", phone: 351},
    {name: "Puerto Rico", code: "PR", phone: 1787},
    {name: "Qatar", code: "QA", phone: 974},
    {name: "Reunion", code: "RE", phone: 262},
    {name: "Romania", code: "RO", phone: 40},
    {name: "Russian Federation", code: "RU", phone: 7},
    {name: "Rwanda", code: "RW", phone: 250},
    {name: "Saint Barthelemy", code: "BL", phone: 590},
    {name: "Saint Helena", code: "SH", phone: 290},
    {name: "Saint Kitts and Nevis", code: "KN", phone: 1869},
    {name: "Saint Lucia", code: "LC", phone: 1758},
    {name: "Saint Martin", code: "MF", phone: 590},
    {name: "Saint Pierre and Miquelon", code: "PM", phone: 508},
    {name: "Saint Vincent and the Grenadines", code: "VC", phone: 1784},
    {name: "Samoa", code: "WS", phone: 684},
    {name: "San Marino", code: "SM", phone: 378},
    {name: "Sao Tome and Principe", code: "ST", phone: 239},
    {name: "Saudi Arabia", code: "SA", phone: 966},
    {name: "Senegal", code: "SN", phone: 221},
    {name: "Serbia", code: "RS", phone: 381},
    {name: "Serbia and Montenegro", code: "CS", phone: 381},
    {name: "Seychelles", code: "SC", phone: 248},
    {name: "Sierra Leone", code: "SL", phone: 232},
    {name: "Singapore", code: "SG", phone: 65},
    {name: "St Martin", code: "SX", phone: 721},
    {name: "Slovakia", code: "SK", phone: 421},
    {name: "Slovenia", code: "SI", phone: 386},
    {name: "Solomon Islands", code: "SB", phone: 677},
    {name: "Somalia", code: "SO", phone: 252},
    {name: "South Africa", code: "ZA", phone: 27},
    {name: "South Georgia and the South Sandwich Islands", code: "GS", phone: 500},
    {name: "South Sudan", code: "SS", phone: 211},
    {name: "Spain", code: "ES", phone: 34},
    {name: "Sri Lanka", code: "LK", phone: 94},
    {name: "Sudan", code: "SD", phone: 249},
    {name: "Suriname", code: "SR", phone: 597},
    {name: "Svalbard and Jan Mayen", code: "SJ", phone: 47},
    {name: "Swaziland", code: "SZ", phone: 268},
    {name: "Sweden", code: "SE", phone: 46},
    {name: "Switzerland", code: "CH", phone: 41},
    {name: "Syrian Arab Republic", code: "SY", phone: 963},
    {name: "Taiwan, Province of China", code: "TW", phone: 886},
    {name: "Tajikistan", code: "TJ", phone: 992},
    {name: "Tanzania, United Republic of", code: "TZ", phone: 255},
    {name: "Thailand", code: "TH", phone: 66},
    {name: "Timor-Leste", code: "TL", phone: 670},
    {name: "Togo", code: "TG", phone: 228},
    {name: "Tokelau", code: "TK", phone: 690},
    {name: "Tonga", code: "TO", phone: 676},
    {name: "Trinidad and Tobago", code: "TT", phone: 1868},
    {name: "Tunisia", code: "TN", phone: 216},
    {name: "Turkey", code: "TR", phone: 90},
    {name: "Turkmenistan", code: "TM", phone: 7370},
    {name: "Turks and Caicos Islands", code: "TC", phone: 1649},
    {name: "Tuvalu", code: "TV", phone: 688},
    {name: "Uganda", code: "UG", phone: 256},
    {name: "Ukraine", code: "UA", phone: 380},
    {name: "United Arab Emirates", code: "AE", phone: 971},
    {name: "United Kingdom", code: "GB", phone: 44},
    {name: "United States", code: "US", phone: 1},
    {name: "United States Minor Outlying Islands", code: "UM", phone: 1},
    {name: "Uruguay", code: "UY", phone: 598},
    {name: "Uzbekistan", code: "UZ", phone: 998},
    {name: "Vanuatu", code: "VU", phone: 678},
    {name: "Venezuela", code: "VE", phone: 58},
    {name: "Viet Nam", code: "VN", phone: 84},
    {name: "Virgin Islands, British", code: "VG", phone: 1284},
    {name: "Virgin Islands, U.s.", code: "VI", phone: 1340},
    {name: "Wallis and Futuna", code: "WF", phone: 681},
    {name: "Western Sahara", code: "EH", phone: 212},
    {name: "Yemen", code: "YE", phone: 967},
    {name: "Zambia", code: "ZM", phone: 260},
    {name: "Zimbabwe", code: "ZW", phone: 263}
]

$(document).ready(function () {

    const wrapperDiv = $('[data-form-field-pro="number-input-with-country-code"]')

    const lightTheme = {
        lightThemeHoverTextColor: wrapperDiv.attr('data-light-theme-number-input-text-color'),
        lightThemeHoverBackgroundColor: wrapperDiv.attr('data-light-theme-number-input-background-color')
    }

    const darkTheme = {
        darkThemeHoverTextColor: wrapperDiv.attr('data-dark-theme-number-input-text-color'),
        darkThemeHoverBackgroundColor: wrapperDiv.attr('data-dark-theme-number-input-background-color')
    }



    const script = document.createElement('script');
    script.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';

    document.head.appendChild(script);


    const additionalStyle = `
    

.number-input-dropdown ol::-webkit-scrollbar {
    width: 0.6rem;
}

.number-input-dropdown ol::-webkit-scrollbar-thumb {
    width: 0.4rem;
    height: 3rem;
    background-color: #ccc;
    border-radius: .4rem;
}

.number-input-dropdown ol li {
    padding: 8px;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    cursor: pointer;
}

.number-input-dropdown ol li.hide {
    display: none;
}

.number-input-dropdown ol li:not(:last-child) {
    border-bottom: .1rem solid #eee;
}

.number-input-dropdown ol li:hover {
    background-color:${lightTheme.lightThemeHoverBackgroundColor || '#000000'};
    color:${lightTheme.lightThemeHoverTextColor || '#ffffff'};
}

.number-input-dropdown ol li .country-name {
    margin-left: .4rem;
}

  @media (prefers-color-scheme: dark){
          .number-input-dropdown ol li:hover {
                background-color: ${darkTheme.darkThemeHoverBackgroundColor || '#000000'};
                color: ${darkTheme.darkThemeHoverTextColor || '#ffffff'};
            }
        }

    `

    const style = document.createElement('style')
    style.innerHTML = additionalStyle

    document.getElementsByTagName('head')[0].appendChild(style)

    const selectBox = $('.number-input-dropdown'),
        downArrow = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L12 15L18 9" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`;

    let searchBox = $('.number-input-search-field');
    let inputBox = $('.number-input-field');
    let selectedOption = $('.number-input-icon-wrapper');


    let options = null;

    const flagIcon = document.createElement('span')
    flagIcon.setAttribute('class', 'iconify')
    flagIcon.setAttribute('data-icon', 'flag:gb-4x3')
    $('.number-input-icon-wrapper').prepend(flagIcon)


    $.each(countries, function (index, country) {
        const option = `<li class="option"><div><span class="iconify" data-icon="flag:${country.code.toLowerCase()}-4x3"></span><span class="country-name">${country.name}</span></div><span class='country-code'>+${country.phone}</span></li>`;
        selectBox.find('ol').append(option);
        options = $('.option');

    });

    inputBox.val(parseInt('+' + countries[0].phone + " "))

    function selectOption() {
        const icon = $(this).find('.iconify').clone(),
            phoneCode = $(this).find('.country-code').clone().text();

        selectedOption.html('').append(icon, downArrow);
        inputBox.val(parseInt(phoneCode + ' ')).focus();
        selectBox.hide();
        searchBox.val('');
        selectBox.find('.hide').removeClass('hide');
    }

    function searchCountry() {
        const searchQuery = searchBox.val().toLowerCase();

        options.each(function () {
            const isMatched = $(this).find('.country-name').text().toLowerCase().includes(searchQuery);
            $(this).toggleClass('hide', !isMatched);
        });
    }


    selectedOption.on('click', function (e) {

        inputBox = $(this).siblings().eq(0)
        selectedOption = $(this)
        searchBox = $(this).siblings().eq(1).find('.number-input-search-field')

        $('.number-input-dropdown').not($(this).siblings().eq(1)).hide();

        $(this).siblings().eq(1).toggle()

    });

    $(document).on("click", function (e) {

        if (!(e.target.getAttribute('class') === searchBox.attr('class'))) {

            if ($(e.target).closest(selectedOption).length === 0) {
                selectBox.hide()
                selectBox.attr('input-number-dropdown', 'hide')
            }
        }

    });

    options.on('click', selectOption);
    searchBox.on('input', searchCountry);


})


// Color picker input field


$(document).ready(async function () {
    // https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.js
    // add color picker library script

    const addColorPickerScript = async () => {
        const res = await fetch(`https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.js`);

        if (res.ok) {
            const scriptString = await res.text();
            const colorPickerScript = document.createElement("script");
            colorPickerScript.innerHTML = scriptString;

            document.getElementsByTagName("head")[0].appendChild(colorPickerScript);
        }
    };

    await addColorPickerScript()


    const customStyle = `  .sp-choose {
            background-color: #111111 !important;
        }
        .sp-dd {
            display: none;
        }
        .sp-replacer {
            width: 30px;
            height: 30px;
        }
`
    const addColorPickerCss = async () => {
        const res = await fetch(`https://cdn.jsdelivr.net/npm/spectrum-colorpicker2/dist/spectrum.min.css`);

        if (res.ok) {
            const cssString = await res.text();
            const style = document.createElement("style");
            style.innerHTML = `${cssString} ${customStyle}`;

            document.getElementsByTagName("head")[0].appendChild(style);
        }
    };

    await addColorPickerCss()


    $(".color-input").spectrum({
        type: "color",
        showPalette: false,
        showInput: true,
        allowEmpty: false

    });
    let selectedInput

    $('.sp-replacer').on('click', function (e) {

        selectedInput = $(this)
    })

    $('.sp-choose').on('click', function () {
        const color = selectedInput.find('.sp-preview-inner').css('background-color')

        selectedInput.siblings().attr('value', color)

    })


})


// File Uploader

$(document).ready(async function () {

    const customStyle = `
    .dropzone{
    background-color:transparent !important;
    }
    .dropzone .dz-message{
            margin: 0;
        }
        .dz-message-content{
            margin: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }
        .dz-message-link{
            text-decoration: underline;
        }
        
           .dropzone .dz-preview.dz-image-preview{
            background-color: transparent;
        }

        .dropzone .dz-preview .dz-remove{
            color: #000000;
            text-decoration: none;
        }
        
    `

    const addDropzoneCss = async () => {
        const res = await fetch(`https://unpkg.com/dropzone@5.9.3/dist/min/dropzone.min.css`);

        if (res.ok) {
            const cssString = await res.text();
            const style = document.createElement("style");
            style.innerHTML = `${cssString} ${customStyle}`;

            document.getElementsByTagName("head")[0].appendChild(style);
        }
    };

    await addDropzoneCss()

    const addDropzoneScript = async () => {
        const res = await fetch(`https://unpkg.com/dropzone@5/dist/min/dropzone.min.js`);
        if (res.ok) {
            const dzScript = await res.text()
            const script = document.createElement("script");
            script.innerHTML = dzScript

            document.getElementsByTagName("head")[0].appendChild(script);
        }
    }

    await addDropzoneScript()

    Dropzone.autoDiscover = false;

    const dropzoneList = $('.dropzone')

    const dropzoneIds = Object.values(dropzoneList)
        .map((value) => value.id);

    dropzoneIds.map(async function (i) {

        if (i !== undefined) {

            const element = document.getElementById(i)
            const $element = $(`#${i}`)

            const attrs = element.getAttributeNames().reduce((acc, name) => {
                return {...acc, [name.replace(/-/g, "_")]: element.getAttribute(name)};
            }, {});

            const dropzone = new Dropzone(`#${i}`,
                {
                    url: "#",
                    method: "post",
                    paramName: "file",
                    autoProcessQueue: true,
                    addRemoveLinks: true,
                    maxFiles: parseInt(attrs.data_max_files),
                    maxFilesize: parseInt(attrs.data_max_file_size),
                    acceptedFiles: attrs.data_accepted_files,
                }
            )

            dropzone.on('addedfile', function (file) {
            })
            dropzone.on('success', function (file) {
                const borderRadius = $element.css('border-radius')
                $element.find('.dz-image').css('border-radius', borderRadius || 0)
            })
            dropzone.on('removedfile', function (file) {
            })

            await $('.dz-message').each(function () {
                $(this).html(`<p class="dz-message-content"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M518.3 459a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V856c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V613.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 459z"></path><path d="M811.4 366.7C765.6 245.9 648.9 160 512.2 160S258.8 245.8 213 366.6C127.3 389.1 64 467.2 64 560c0 110.5 89.5 200 199.9 200H304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8h-40.1c-33.7 0-65.4-13.4-89-37.7-23.5-24.2-36-56.8-34.9-90.6.9-26.4 9.9-51.2 26.2-72.1 16.7-21.3 40.1-36.8 66.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0 1 52.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10C846.1 454.5 884 503.8 884 560c0 33.1-12.9 64.3-36.3 87.7a123.07 123.07 0 0 1-87.6 36.3H720c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h40.1C870.5 760 960 670.5 960 560c0-92.7-63.1-170.7-148.6-193.3z"></path></svg>  Drag and Drop or <span class="dz-message-link">Browse file</span> </p>`)
            })

            $element.find('.dz-message-content svg, .dz-message-link')
                .css('color', attrs.data_default_color);

        }
    })

})


// Advance Email Field
// $(document).ready(function () {
//
//     const inputElements = $('input[data-email="form-field-pro-email"]');
//     const mailFormat = /^[A-Za-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,8}$/;
//
//     inputElements.each(function () {
//         const $this = $(this);
//         const $nextElement = $this.next('.email-error-message');
//
//         $this.on('keyup', function () {
//             const inputValue = $this.val();
//
//             if (!mailFormat.test(inputValue) && inputValue !== '') {
//                 $nextElement.text($this.data('invalid-error-msg'));
//             } else if (inputValue === '') {
//                 $nextElement.text($this.data('empty-error-msg'));
//             } else {
//                 $nextElement.text('');
//             }
//         });
//     });
//
//     $('form').submit(async function (e) {
//         e.preventDefault()
//
//         let form = $(this);
//         let hasEmptyField = false;
//
//         await form.find('input[data-email="form-field-pro-email"]').each(function () {
//             if ($(this).val().trim() === '') {
//                 hasEmptyField = true;
//                 const $nextElement = $(this).next('.email-error-message');
//                 $nextElement.text($(this).data('empty-error-msg'));
//             }
//         });
//
//         if (hasEmptyField) {
//             $(this).off('submit')
//             console.log('Form validation failed');
//         } else {
//             $(this).off('submit').submit();
//             console.log('Form submitted successfully');
//         }
//     });
//     // })
// });


// net promoter score
$(document).ready(function () {

    const netPromoterElement = $('[data-field-name="net-promoter-score"]')

    let lightTheme = {}
    let darkTheme = {}

    function getAttributes($element) {
        let attributes = {};
        $.each($element[0].attributes, function (index, attr) {
            attributes[attr.name.replace(/-/g, '_')] = attr.value;
        });
        return attributes;
    }

    netPromoterElement.each(function () {

        const element = $(this)
        const elementAttributes = getAttributes(element);

        lightTheme = {
            lightThemeHoverTextColor: element.attr('data-light-theme-score-text-color'),
            lightThemeHoverBackgroundColor: element.attr('data-light-theme-score-background-color')
        }

        darkTheme = {
            darkThemeHoverTextColor: element.attr('data-dark-theme-score-text-color'),
            darkThemeHoverBackgroundColor: element.attr('data-dark-theme-score-background-color')
        }

        const inputElement = element.find('[data-input="net-promoter-score"]')
        const extraFeedbackCollection = element.find('[data-field="extra-feedback-collection"]')

        if (!elementAttributes.data_extra_feedback_collection.includes('always')) {
            extraFeedbackCollection.remove()
        }

        $(this).find('[data-name="net-promoter-score-value"]').on('click', function () {
            const value = $(this).text()
            inputElement.val(value)

            if (value === inputElement.val()) {
                element.find('[data-name="net-promoter-score-value"]').removeClass('net-promoter-active')
                $(this).addClass('net-promoter-active')

                const extraFeedback = elementAttributes.data_extra_feedback_collection || ''
                if (!extraFeedback.includes('always')) {

                    if (!extraFeedback.includes('never') || !extraFeedback.includes('always')) {

                        if (parseInt(value) < parseInt(extraFeedback)) {

                            element.append(extraFeedbackCollection)

                        } else {

                            extraFeedbackCollection.remove()
                        }
                    } else {

                        extraFeedbackCollection.show()
                    }
                }

            }

        })

    })


    const customStyle = `
          .net-promoter-active {
            background-color: ${lightTheme.lightThemeHoverBackgroundColor};
            color: ${lightTheme.lightThemeHoverTextColor};
        }
        
        @media (prefers-color-scheme: dark){
              .net-promoter-active {
                background-color: ${darkTheme.darkThemeHoverBackgroundColor};
                color: ${darkTheme.darkThemeHoverTextColor};
            }
        }
    
    `
    const style = document.createElement("style");
    style.innerHTML = customStyle;

    document.getElementsByTagName("head")[0].appendChild(style);

})


// Likert Scale field

$(document).ready(function () {


    const customStyle = `
           [data-field="likert-scale-field-radio"] {
            opacity: 0;
            visibility: hidden;
            height: 0 !important;
            margin: 0;
            width: 0 !important;
        }

        [data-field="likert-scale-field-radio"]:checked,
        [data-field="likert-scale-field-radio"]:not(:checked) + label{
           width: 20px;
            height: 20px;
            display: inline-block;
            border: 1px solid #000;
            border-radius: 50%;
            margin-bottom:0 !important;
        }

        [data-field="likert-scale-field-radio"]:checked + label{
            width: 20px;
            height: 20px;
            display: inline-block;
            border: 1px solid #000;
            border-radius: 50%;
            background-image: url('data:image/svg+xml,<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.3333 1L4.54167 8.79167L1 5.25" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
            background-repeat:no-repeat;
            background-position: center;
            margin-bottom:0 !important;
        }
    
    `
    const style = document.createElement("style");
    style.innerHTML = customStyle;

    document.getElementsByTagName("head")[0].appendChild(style);

})