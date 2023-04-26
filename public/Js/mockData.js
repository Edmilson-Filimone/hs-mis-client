/*You must re-group the data to find results at the district, province or regional level instead of facility level only*/

//Query A -- Results by gender, age and maritalStatus in a specific month and date

const queryA = {"data":[{"result":"Negative","gender":"Female","age":25,"maritalStatus":"Single","value":3},{"result":"Positive","gender":"Female","age":23,"maritalStatus":"Single","value":1},{"result":"Positive","gender":"Female","age":25,"maritalStatus":"Single","value":2},{"result":"Positive","gender":"Male","age":27,"maritalStatus":"Single","value":2}]}

// Query B -- Result by facility, gender, age and maritalStatus in a specific month and date

const queryB = {"data":[{"facility":"Hospital A","facilityAcronym":"HA","region":"Sul","province":"Gaza","district":"Massingire","gender":"Female","age":23,"maritalStatus":"Single","result":"Positive","value":1},{"facility":"Hospital A","facilityAcronym":"HA","region":"Sul","province":"Gaza","district":"Massingire","gender":"Female","age":25,"maritalStatus":"Single","result":"Positive","value":1},{"facility":"Hospital B","facilityAcronym":"HB","region":"Sul","province":"Gaza","district":"Massia","gender":"Female","age":25,"maritalStatus":"Single","result":"Negative","value":1},{"facility":"Hospital B","facilityAcronym":"HB","region":"Sul","province":"Gaza","district":"Massia","gender":"Female","age":25,"maritalStatus":"Single","result":"Positive","value":1},{"facility":"Hospital C","facilityAcronym":"HC","region":"Sul","province":"Maputo","district":"Manhica","gender":"Female","age":25,"maritalStatus":"Single","result":"Negative","value":1},{"facility":"Hospital D","facilityAcronym":"HD","region":"Sul","province":"Maputo","district":"Marracuene","gender":"Female","age":25,"maritalStatus":"Single","result":"Negative","value":1},{"facility":"Hospital D","facilityAcronym":"HD","region":"Sul","province":"Maputo","district":"Marracuene","gender":"Male","age":27,"maritalStatus":"Single","result":"Positive","value":2}]}

//Query C -- Result by facility, gender, age, maritalStatus, date -- Agg all the sample in the db (Time Series Results)

const queryC = {"data":[{"facility":"Hospital A","facilityAcronym":"HA","region":"Sul","province":"Gaza","district":"Massingire","gender":"Female","age":23,"maritalStatus":"Single","year":2023,"month":"April","date":"2023-04-16T22:00:00+0000","result":"Positive","value":1},{"facility":"Hospital A","facilityAcronym":"HA","region":"Sul","province":"Gaza","district":"Massingire","gender":"Female","age":25,"maritalStatus":"Single","year":2023,"month":"April","date":"2023-04-16T22:00:00+0000","result":"Positive","value":1},{"facility":"Hospital B","facilityAcronym":"HB","region":"Sul","province":"Gaza","district":"Massia","gender":"Female","age":25,"maritalStatus":"Single","year":2023,"month":"April","date":"2023-04-16T22:00:00+0000","result":"Negative","value":1},{"facility":"Hospital B","facilityAcronym":"HB","region":"Sul","province":"Gaza","district":"Massia","gender":"Female","age":25,"maritalStatus":"Single","year":2023,"month":"April","date":"2023-04-16T22:00:00+0000","result":"Positive","value":1},{"facility":"Hospital C","facilityAcronym":"HC","region":"Sul","province":"Maputo","district":"Manhica","gender":"Female","age":25,"maritalStatus":"Single","year":2023,"month":"April","date":"2023-04-16T22:00:00+0000","result":"Negative","value":1},{"facility":"Hospital D","facilityAcronym":"HD","region":"Sul","province":"Maputo","district":"Marracuene","gender":"Female","age":25,"maritalStatus":"Single","year":2023,"month":"April","date":"2023-04-16T22:00:00+0000","result":"Negative","value":1},{"facility":"Hospital D","facilityAcronym":"HD","region":"Sul","province":"Maputo","district":"Marracuene","gender":"Male","age":27,"maritalStatus":"Single","year":2023,"month":"April","date":"2023-04-16T22:00:00+0000","result":"Positive","value":2}]}

export const data = [
    {
        "ADM2_PT": "Alto Molocue",
        "ADM2_PCODE": "MZ1101",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 63.9444009188808
    },
    {
        "ADM2_PT": "Ancuabe",
        "ADM2_PCODE": "MZ0101",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 62.7872123928007
    },
    {
        "ADM2_PT": "Angoche",
        "ADM2_PCODE": "MZ0701",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 58.6806164210006
    },
    {
        "ADM2_PT": "Angonia",
        "ADM2_PCODE": "MZ1001",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 54.3050813171563
    },
    {
        "ADM2_PT": "Balama",
        "ADM2_PCODE": "MZ0102",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 13.9597019872404
    },
    {
        "ADM2_PT": "Barue",
        "ADM2_PCODE": "MZ0401",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 54.8471409385438
    },
    {
        "ADM2_PT": "Bilene",
        "ADM2_PCODE": "MZ0201",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 6.35261242401867
    },
    {
        "ADM2_PT": "Boane",
        "ADM2_PCODE": "MZ0501",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 11.7607766836145
    },
    {
        "ADM2_PT": "Buzi",
        "ADM2_PCODE": "MZ0901",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 37.5794774290947
    },
    {
        "ADM2_PT": "Cahora Bassa",
        "ADM2_PCODE": "MZ1002",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 39.4435855477241
    },
    {
        "ADM2_PT": "Caia",
        "ADM2_PCODE": "MZ0902",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 87.54885292002
    },
    {
        "ADM2_PT": "Changara",
        "ADM2_PCODE": "MZ1003",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 31.7003726452264
    },
    {
        "ADM2_PT": "Chemba",
        "ADM2_PCODE": "MZ0903",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 39.008632607707
    },
    {
        "ADM2_PT": "Cheringoma",
        "ADM2_PCODE": "MZ0904",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 28.0757622816478
    },
    {
        "ADM2_PT": "Chibabava",
        "ADM2_PCODE": "MZ0905",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 70.1725222012898
    },
    {
        "ADM2_PT": "Chibuto",
        "ADM2_PCODE": "MZ0202",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 1.67622836066109
    },
    {
        "ADM2_PT": "Chicualacuala",
        "ADM2_PCODE": "MZ0203",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 18.6787192874511
    },
    {
        "ADM2_PT": "Chifunde",
        "ADM2_PCODE": "MZ1004",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 69.9395553836566
    },
    {
        "ADM2_PT": "Chigubo",
        "ADM2_PCODE": "MZ0204",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 25.3835358900057
    },
    {
        "ADM2_PT": "Chimbonila",
        "ADM2_PCODE": "MZ0801",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 1.35778898329879
    },
    {
        "ADM2_PT": "Chinde",
        "ADM2_PCODE": "MZ1102",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 56.1614908898854
    },
    {
        "ADM2_PT": "Chiure",
        "ADM2_PCODE": "MZ0103",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 27.0501439475197
    },
    {
        "ADM2_PT": "Chiuta",
        "ADM2_PCODE": "MZ1005",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 77.7892102277882
    },
    {
        "ADM2_PT": "Chokwe",
        "ADM2_PCODE": "MZ0205",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 90.4239675780448
    },
    {
        "ADM2_PT": "Chongoene",
        "ADM2_PCODE": "MZ0206",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 73.9874705164299
    },
    {
        "ADM2_PT": "Cidade Da Beira",
        "ADM2_PCODE": "MZ0906",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 11.2345355858575
    },
    {
        "ADM2_PT": "Cidade Da Matola",
        "ADM2_PCODE": "MZ0502",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 71.2370507349333
    },
    {
        "ADM2_PT": "Cidade De Chimoio",
        "ADM2_PCODE": "MZ0402",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 50.6667611982711
    },
    {
        "ADM2_PT": "Cidade De Inhambane",
        "ADM2_PCODE": "MZ0301",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 41.3961567583363
    },
    {
        "ADM2_PT": "Cidade De Lichinga",
        "ADM2_PCODE": "MZ0802",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 11.1049412450645
    },
    {
        "ADM2_PT": "Cidade De Maputo",
        "ADM2_PCODE": "MZ0601",
        "ADM1_PT": "Maputo City",
        "ADM1_PCODE": "MZ06",
        "Metric": "Prevalence",
        "Value": 34.594201368329
    },
    {
        "ADM2_PT": "Cidade De Nampula",
        "ADM2_PCODE": "MZ0702",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 20.625113536632
    },
    {
        "ADM2_PT": "Cidade De Pemba",
        "ADM2_PCODE": "MZ0104",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 84.4256721235361
    },
    {
        "ADM2_PT": "Cidade De Quelimane",
        "ADM2_PCODE": "MZ1103",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 53.9449737477986
    },
    {
        "ADM2_PT": "Cidade De Tete",
        "ADM2_PCODE": "MZ1006",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 67.481795897427
    },
    {
        "ADM2_PT": "Cidade De Xai-Xai",
        "ADM2_PCODE": "MZ0207",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 19.3909089512422
    },
    {
        "ADM2_PT": "Cuamba",
        "ADM2_PCODE": "MZ0803",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 28.6266596400633
    },
    {
        "ADM2_PT": "Derre",
        "ADM2_PCODE": "MZ1104",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 9.4150775984316
    },
    {
        "ADM2_PT": "Doa",
        "ADM2_PCODE": "MZ1007",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 90.950948015735
    },
    {
        "ADM2_PT": "Dondo",
        "ADM2_PCODE": "MZ0907",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 15.0140306610225
    },
    {
        "ADM2_PT": "Erati",
        "ADM2_PCODE": "MZ0703",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 32.9216979917758
    },
    {
        "ADM2_PT": "Funhalouro",
        "ADM2_PCODE": "MZ0302",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 89.4838779068395
    },
    {
        "ADM2_PT": "Gile",
        "ADM2_PCODE": "MZ1105",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 77.8182223725041
    },
    {
        "ADM2_PT": "Gondola",
        "ADM2_PCODE": "MZ0403",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 71.2403081765472
    },
    {
        "ADM2_PT": "Gorongosa",
        "ADM2_PCODE": "MZ0908",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 67.7534964459478
    },
    {
        "ADM2_PT": "Govuro",
        "ADM2_PCODE": "MZ0303",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 1.50766707849047
    },
    {
        "ADM2_PT": "Guija",
        "ADM2_PCODE": "MZ0208",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 46.3216614428575
    },
    {
        "ADM2_PT": "Guro",
        "ADM2_PCODE": "MZ0404",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 66.2503437996267
    },
    {
        "ADM2_PT": "Gurue",
        "ADM2_PCODE": "MZ1106",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 1.47494381136004
    },
    {
        "ADM2_PT": "Homoine",
        "ADM2_PCODE": "MZ0304",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 7.19930236772582
    },
    {
        "ADM2_PT": "Ibo",
        "ADM2_PCODE": "MZ0105",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 47.988339145484
    },
    {
        "ADM2_PT": "Ile",
        "ADM2_PCODE": "MZ1107",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 87.329385746463
    },
    {
        "ADM2_PT": "Ilha De Moçambique",
        "ADM2_PCODE": "MZ0704",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 25.129304049861
    },
    {
        "ADM2_PT": "Ilha Licom",
        "ADM2_PCODE": "MZ0804",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 49.3581117869968
    },
    {
        "ADM2_PT": "Ilha Risunodo",
        "ADM2_PCODE": "MZ0805",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 47.8143393839593
    },
    {
        "ADM2_PT": "Inharrime",
        "ADM2_PCODE": "MZ0305",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 98.4201517750044
    },
    {
        "ADM2_PT": "Inhassoro",
        "ADM2_PCODE": "MZ0306",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 17.0997429052585
    },
    {
        "ADM2_PT": "Inhassunge",
        "ADM2_PCODE": "MZ1108",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 53.6113181734563
    },
    {
        "ADM2_PT": "Jangamo",
        "ADM2_PCODE": "MZ0307",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 67.4472490331578
    },
    {
        "ADM2_PT": "Lago",
        "ADM2_PCODE": "MZ0806",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 51.2879702871307
    },
    {
        "ADM2_PT": "Lago Niassa",
        "ADM2_PCODE": "MZ0807",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 62.3574020971262
    },
    {
        "ADM2_PT": "Lalaua",
        "ADM2_PCODE": "MZ0705",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 38.2485453646855
    },
    {
        "ADM2_PT": "Larde",
        "ADM2_PCODE": "MZ0706",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 31.1650311355535
    },
    {
        "ADM2_PT": "Limpopo",
        "ADM2_PCODE": "MZ0209",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 90.2500330178913
    },
    {
        "ADM2_PT": "Liúpo",
        "ADM2_PCODE": "MZ0707",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 33.8252990859421
    },
    {
        "ADM2_PT": "Luabo",
        "ADM2_PCODE": "MZ1109",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 27.4423252469909
    },
    {
        "ADM2_PT": "Lugela",
        "ADM2_PCODE": "MZ1110",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 82.9430077559046
    },
    {
        "ADM2_PT": "Mabalane",
        "ADM2_PCODE": "MZ0210",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 54.5874224132566
    },
    {
        "ADM2_PT": "Mabote",
        "ADM2_PCODE": "MZ0308",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 4.85492125708456
    },
    {
        "ADM2_PT": "Macanga",
        "ADM2_PCODE": "MZ1008",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 30.9349526097172
    },
    {
        "ADM2_PT": "Macate",
        "ADM2_PCODE": "MZ0405",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 66.7736724787918
    },
    {
        "ADM2_PT": "Machanga",
        "ADM2_PCODE": "MZ0909",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 37.7492165550711
    },
    {
        "ADM2_PT": "Machaze",
        "ADM2_PCODE": "MZ0406",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 36.4235477530931
    },
    {
        "ADM2_PT": "Macomia",
        "ADM2_PCODE": "MZ0106",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 96.8461118043486
    },
    {
        "ADM2_PT": "Macossa",
        "ADM2_PCODE": "MZ0407",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 37.5134246871209
    },
    {
        "ADM2_PT": "Maganja Da Costa",
        "ADM2_PCODE": "MZ1111",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 71.6269054976205
    },
    {
        "ADM2_PT": "Magoe",
        "ADM2_PCODE": "MZ1009",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 5.1629947021477
    },
    {
        "ADM2_PT": "Magude",
        "ADM2_PCODE": "MZ0503",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 38.276872046474
    },
    {
        "ADM2_PT": "Majune",
        "ADM2_PCODE": "MZ0808",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 38.0003327024202
    },
    {
        "ADM2_PT": "Malema",
        "ADM2_PCODE": "MZ0708",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 19.5450414441977
    },
    {
        "ADM2_PT": "Mandimba",
        "ADM2_PCODE": "MZ0809",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 25.5197417424636
    },
    {
        "ADM2_PT": "Mandlakaze",
        "ADM2_PCODE": "MZ0211",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 83.4949090949009
    },
    {
        "ADM2_PT": "Manhiça",
        "ADM2_PCODE": "MZ0504",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 71.7519192065778
    },
    {
        "ADM2_PT": "Manica",
        "ADM2_PCODE": "MZ0408",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 29.5449003472915
    },
    {
        "ADM2_PT": "Mapai",
        "ADM2_PCODE": "MZ0212",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 51.007657312236
    },
    {
        "ADM2_PT": "Maquival",
        "ADM2_PCODE": "MZ1112",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 69.0452550769781
    },
    {
        "ADM2_PT": "Marara",
        "ADM2_PCODE": "MZ1010",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 71.1274307254308
    },
    {
        "ADM2_PT": "Maravia",
        "ADM2_PCODE": "MZ1011",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 38.9707301675406
    },
    {
        "ADM2_PT": "Maringue",
        "ADM2_PCODE": "MZ0910",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 73.147793051133
    },
    {
        "ADM2_PT": "Marracuene",
        "ADM2_PCODE": "MZ0505",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 82.9059165585676
    },
    {
        "ADM2_PT": "Marromeu",
        "ADM2_PCODE": "MZ0911",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 24.864756893985
    },
    {
        "ADM2_PT": "Marrupa",
        "ADM2_PCODE": "MZ0810",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 88.9977248980323
    },
    {
        "ADM2_PT": "Massangena",
        "ADM2_PCODE": "MZ0213",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 3.71538168673562
    },
    {
        "ADM2_PT": "Massinga",
        "ADM2_PCODE": "MZ0309",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 5.48306729487246
    },
    {
        "ADM2_PT": "Massingir",
        "ADM2_PCODE": "MZ0214",
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 70.5233105866139
    },
    {
        "ADM2_PT": "Matutuine",
        "ADM2_PCODE": "MZ0506",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 44.6055421297
    },
    {
        "ADM2_PT": "Maua",
        "ADM2_PCODE": "MZ0811",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 96.4796417138836
    },
    {
        "ADM2_PT": "Mavago",
        "ADM2_PCODE": "MZ0812",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 34.9569407146838
    },
    {
        "ADM2_PT": "Maxixe",
        "ADM2_PCODE": "MZ0310",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 89.1930353384646
    },
    {
        "ADM2_PT": "Mecanhelas",
        "ADM2_PCODE": "MZ0813",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 43.8953550967221
    },
    {
        "ADM2_PT": "Meconta",
        "ADM2_PCODE": "MZ0709",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 51.2755454015694
    },
    {
        "ADM2_PT": "Mecuburi",
        "ADM2_PCODE": "MZ0710",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 90.8997574796052
    },
    {
        "ADM2_PT": "Mecufi",
        "ADM2_PCODE": "MZ0107",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 58.0496203349859
    },
    {
        "ADM2_PT": "Mecula",
        "ADM2_PCODE": "MZ0814",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 96.8594409044946
    },
    {
        "ADM2_PT": "Meluco",
        "ADM2_PCODE": "MZ0108",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 0.335131303506836
    },
    {
        "ADM2_PT": "Memba",
        "ADM2_PCODE": "MZ0711",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 82.7693591700926
    },
    {
        "ADM2_PT": "Metarica",
        "ADM2_PCODE": "MZ0815",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 3.92196207650525
    },
    {
        "ADM2_PT": "Metuge",
        "ADM2_PCODE": "MZ0109",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 53.4862067048404
    },
    {
        "ADM2_PT": "Milange",
        "ADM2_PCODE": "MZ1113",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 34.9849726842977
    },
    {
        "ADM2_PT": "Moamba",
        "ADM2_PCODE": "MZ0507",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 7.64536933392631
    },
    {
        "ADM2_PT": "Moatize",
        "ADM2_PCODE": "MZ1012",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 41.0833637371976
    },
    {
        "ADM2_PT": "Mocimboa Da Praia",
        "ADM2_PCODE": "MZ0110",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 9.56969909229089
    },
    {
        "ADM2_PT": "Mocuba",
        "ADM2_PCODE": "MZ1114",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 20.4109000387005
    },
    {
        "ADM2_PT": "Mocubela",
        "ADM2_PCODE": "MZ1115",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 6.50348905900542
    },
    {
        "ADM2_PT": "Mogincual",
        "ADM2_PCODE": "MZ0712",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 86.5892132413966
    },
    {
        "ADM2_PT": "Mogovolas",
        "ADM2_PCODE": "MZ0713",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 35.7647493370052
    },
    {
        "ADM2_PT": "Molumbo",
        "ADM2_PCODE": "MZ1116",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 10.5086921108511
    },
    {
        "ADM2_PT": "Moma",
        "ADM2_PCODE": "MZ0714",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 66.8810797995394
    },
    {
        "ADM2_PT": "Monapo",
        "ADM2_PCODE": "MZ0715",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 60.3070529919863
    },
    {
        "ADM2_PT": "Montepuez",
        "ADM2_PCODE": "MZ0111",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 10.7656843847986
    },
    {
        "ADM2_PT": "Mopeia",
        "ADM2_PCODE": "MZ1117",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 87.0034974238126
    },
    {
        "ADM2_PT": "Morrumbala",
        "ADM2_PCODE": "MZ1118",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 48.1952477672098
    },
    {
        "ADM2_PT": "Morrumbene",
        "ADM2_PCODE": "MZ0311",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 56.5806285935483
    },
    {
        "ADM2_PT": "Mossuril",
        "ADM2_PCODE": "MZ0716",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 94.8330090654869
    },
    {
        "ADM2_PT": "Mossurize",
        "ADM2_PCODE": "MZ0409",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 54.0349068127027
    },
    {
        "ADM2_PT": "Muanza",
        "ADM2_PCODE": "MZ0912",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 12.2203276393177
    },
    {
        "ADM2_PT": "Muecate",
        "ADM2_PCODE": "MZ0717",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 93.5967145917376
    },
    {
        "ADM2_PT": "Mueda",
        "ADM2_PCODE": "MZ0112",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 39.6024971611984
    },
    {
        "ADM2_PT": "Muembe",
        "ADM2_PCODE": "MZ0816",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 96.2907528678028
    },
    {
        "ADM2_PT": "Muidumbe",
        "ADM2_PCODE": "MZ0113",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 36.8987075487825
    },
    {
        "ADM2_PT": "Mulevala",
        "ADM2_PCODE": "MZ1119",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 57.8270257756284
    },
    {
        "ADM2_PT": "Murrupula",
        "ADM2_PCODE": "MZ0718",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 35.2440834745424
    },
    {
        "ADM2_PT": "Mutarara",
        "ADM2_PCODE": "MZ1013",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 7.41562138328779
    },
    {
        "ADM2_PT": "Nacala",
        "ADM2_PCODE": "MZ0719",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 75.1501452658802
    },
    {
        "ADM2_PT": "Nacala-A-Velha",
        "ADM2_PCODE": "MZ0720",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 56.4159534106054
    },
    {
        "ADM2_PT": "Nacaroa",
        "ADM2_PCODE": "MZ0721",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 14.3659123464482
    },
    {
        "ADM2_PT": "Namaacha",
        "ADM2_PCODE": "MZ0508",
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 14.8903842399137
    },
    {
        "ADM2_PT": "Namacurra",
        "ADM2_PCODE": "MZ1120",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 12.9787748626115
    },
    {
        "ADM2_PT": "Namarroi",
        "ADM2_PCODE": "MZ1121",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 67.8866299302891
    },
    {
        "ADM2_PT": "Namuno",
        "ADM2_PCODE": "MZ0114",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 71.2212731323347
    },
    {
        "ADM2_PT": "Nangade",
        "ADM2_PCODE": "MZ0115",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 36.6691294131191
    },
    {
        "ADM2_PT": "Ngauma",
        "ADM2_PCODE": "MZ0817",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 84.0460244552479
    },
    {
        "ADM2_PT": "Nhamatanda",
        "ADM2_PCODE": "MZ0913",
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 8.50803565200111
    },
    {
        "ADM2_PT": "Nicoadala",
        "ADM2_PCODE": "MZ1122",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 3.05338687466395
    },
    {
        "ADM2_PT": "Nipepe",
        "ADM2_PCODE": "MZ0818",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 19.4555575777581
    },
    {
        "ADM2_PT": "Palma",
        "ADM2_PCODE": "MZ0116",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 56.9985366146526
    },
    {
        "ADM2_PT": "Panda",
        "ADM2_PCODE": "MZ0312",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 82.8909059660014
    },
    {
        "ADM2_PT": "Pebane",
        "ADM2_PCODE": "MZ1123",
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 58.5938227503331
    },
    {
        "ADM2_PT": "Quissanga",
        "ADM2_PCODE": "MZ0118",
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 79.9852432743243
    },
    {
        "ADM2_PT": "Rapale",
        "ADM2_PCODE": "MZ0722",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 27.1668191532202
    },
    {
        "ADM2_PT": "Ribaue",
        "ADM2_PCODE": "MZ0723",
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 12.1228854597797
    },
    {
        "ADM2_PT": "Sanga",
        "ADM2_PCODE": "MZ0819",
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 91.9690043400222
    },
    {
        "ADM2_PT": "Sussundenga",
        "ADM2_PCODE": "MZ0410",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 23.1013123660789
    },
    {
        "ADM2_PT": "Tambara",
        "ADM2_PCODE": "MZ0411",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 90.3175961741344
    },
    {
        "ADM2_PT": "Tsangano",
        "ADM2_PCODE": "MZ1014",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 31.2303179887493
    },
    {
        "ADM2_PT": "Vanduzi",
        "ADM2_PCODE": "MZ0412",
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 19.8748404529069
    },
    {
        "ADM2_PT": "Vilankulo",
        "ADM2_PCODE": "MZ0313",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 80.9917600054793
    },
    {
        "ADM2_PT": "Zavala",
        "ADM2_PCODE": "MZ0314",
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 11.7301886305829
    },
    {
        "ADM2_PT": "Zumbu",
        "ADM2_PCODE": "MZ1015",
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 36.8025042494177
    }
]

export const provinceData = [
    {
        "ADM1_PT": "Inhambane",
        "ADM1_PCODE": "MZ03",
        "Metric": "Prevalence",
        "Value": 41.3961567583363
    },
    {
        "ADM1_PT": "Maputo City",
        "ADM1_PCODE": "MZ06",
        "Metric": "Prevalence",
        "Value": 34.594201368329
    },
    {
        "ADM1_PT": "Gaza",
        "ADM1_PCODE": "MZ02",
        "Metric": "Prevalence",
        "Value": 70.5233105866139
    },
    {
        "ADM1_PT": "Maputo",
        "ADM1_PCODE": "MZ05",
        "Metric": "Prevalence",
        "Value": 14.8903842399137
    },
    {
        "ADM1_PT": "Sofala",
        "ADM1_PCODE": "MZ09",
        "Metric": "Prevalence",
        "Value": 8.50803565200111
    },
    {
        "ADM1_PT": "Zambezia",
        "ADM1_PCODE": "MZ11",
        "Metric": "Prevalence",
        "Value": 58.5938227503331
    },
    {
        "ADM1_PT": "Cabo Delgado",
        "ADM1_PCODE": "MZ01",
        "Metric": "Prevalence",
        "Value": 79.9852432743243
    },
    {
        "ADM1_PT": "Nampula",
        "ADM1_PCODE": "MZ07",
        "Metric": "Prevalence",
        "Value": 12.1228854597797
    },
    {
        "ADM1_PT": "Niassa",
        "ADM1_PCODE": "MZ08",
        "Metric": "Prevalence",
        "Value": 91.9690043400222
    },
    {
        "ADM1_PT": "Manica",
        "ADM1_PCODE": "MZ04",
        "Metric": "Prevalence",
        "Value": 19.8748404529069
    },
    {
        "ADM1_PT": "Tete",
        "ADM1_PCODE": "MZ10",
        "Metric": "Prevalence",
        "Value": 36.8025042494177
    }
]