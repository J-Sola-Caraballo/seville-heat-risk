// Configuración de capas, colores y campos. Estilos tomados del proyecto QGIS (UMEP_FULL_SVQ.qgz).
// Los textos visibles están en i18n.js; aquí solo claves.
window.CFG = {
  doi: "https://doi.org/10.1016/j.uclim.2026.103156",
  bounds: [[-6.30, 37.15], [-5.70, 37.60]],
  center: [-5.9845, 37.3891],
  pnoa: "https://www.ign.es/wmts/pnoa-ma?request=getTile&service=WMTS&version=1.0.0&layer=OI.OrthoimageCoverage&style=default&format=image/jpeg&tilematrixset=GoogleMapsCompatible&tilematrix={z}&tilerow={y}&tilecol={x}",
  biv: {  // clave = H*10+V
    0:"#FFFFFF",1:"#BAD0EA",2:"#89BBE1",3:"#57A5D9",
    10:"#E1B7BF",11:"#B6A1B7",12:"#8C8BAF",13:"#6175A7",
    20:"#D7898D",21:"#B0758D",22:"#89628C",23:"#624E8C",
    30:"#CC5A5A",31:"#974A62",32:"#7F3C6B",33:"#631673"
  },
  // breaks: límites inferiores de las clases 2..n (la clase 1 empieza en el mínimo)
  layers: [
    { id:"contornos", group:"base",   type:"outline" },
    { id:"t_media",   group:"thermal", key:"t_media",   unit:"°C",   dec:1, breaks:[29.5,30,30.5,31,31.5,32,32.5],
      colors:["#2B83BA","#74B6AD","#B7E2A8","#E7F5B7","#FEE8A4","#FDBA6E","#ED6E43","#D7191C"] },
    { id:"t_max_dia", group:"thermal", key:"t_max_dia", unit:"°C",   dec:1, breaks:[35,35.5,36,36.5,37,37.5],
      colors:["#2B83BA","#80BFAB","#C7E8AD","#FFFFBF","#FEC980","#F07C4A","#D7191C"] },
    { id:"t_min_dia", group:"thermal", key:"t_min_dia", unit:"°C",   dec:1, breaks:[23,24,25,26,27,28,29],
      colors:["#2B83BA","#74B6AD","#B7E2A8","#E7F5B7","#FEE8A4","#FDBA6E","#ED6E43","#D7191C"] },
    { id:"h_sobre40", group:"hazard", key:"h_sobre40", pct:"P80", unit:"h",    dec:0, breaks:[1,2,4,6,8,10], flag:"c_h40", thr:5, thrOp:">=",
      colors:["#FFFFFF","#FFFFB2","#FED66D","#FDA649","#F86C31","#E62F21","#BD0026"] },
    { id:"hne",       group:"hazard", key:"hne", pct:"P80",       unit:"°C·h", dec:0, breaks:[200,300,400,500,600], flag:"c_hne", thr:358, thrOp:">=",
      colors:["#FFFFB2","#FED66D","#FDA649","#F86C31","#E62F21","#BD0026"] },
    { id:"cdh",       group:"hazard", key:"cdh", pct:"P80",       unit:"°C·h", dec:0, breaks:[2400,2600,2800,3000,3200], flag:"c_cdh", thr:2689, thrOp:">=",
      colors:["#FFFFB2","#FED66D","#FDA649","#F86C31","#E62F21","#BD0026"] },
    { id:"renta",     group:"vuln",   key:"renta", pct:"P20",     unit:"€",    dec:0, breaks:[10000,15000,20000,25000,30000,35000], flag:"c_renta", thr:14350, thrOp:"<=",
      colors:["#045A8D","#1E7BAE","#4396C4","#74A9CF","#A5BEDB","#CED5E8","#F4F3F6"] },
    { id:"p_mayor65", group:"vuln",   key:"p_mayor65", pct:"P80", unit:"%",    dec:1, breaks:[10,20,30,40], flag:"c_65", thr:27.9, thrOp:">",
      colors:["#F4F3F6","#BDC9E1","#74A9CF","#2B8CBE","#045A8D"] },
    { id:"anyo_edif", group:"vuln",   key:"anyo_edif", unit:"",     dec:0, breaks:[1920,1940,1960,1980,2000], flag:"c_edif", thr:1979, thrOp:"<=",
      colors:["#045A8D","#2382B4","#579DC8","#91B6D6","#C7D0E5","#F4F3F6"] },
    { id:"bivar",     group:"risk",   type:"bivar" }
  ],
  // campos de la ficha (clave de datos, etiqueta i18n, unidad, decimales)
  socio: [
    ["pob","pob","u:persons",0],["dens","dens","u:dens",0],["edad_media","edad_media","u:years",1],
    ["p_menor18","p_menor18","%",1],["p_mayor65","p_mayor65","%",1],["pers_hogar","pers_hogar","u:perhh",2],
    ["p_unipers","p_unipers","%",1],["p_esp","p_esp","%",1],["p_extr","p_extr","%",1]
  ],
  morph: [
    ["svf","svf","u:r01",2],["ndvi","ndvi","u:rm11",2],["albedo","albedo","u:r01",2],["pai","pai","u:r01",2],["altura","altura","m",1],
    ["far","far","m²/m²",1],["arbol","arbol","%",1],["agua","agua","%",1]
  ]
};
