# microservicios-nodejs

Se desarrollaron 3 microservicios en nodejs.
- microA genera un número aleatorio entre 0 y 99.
- microB crea un año aleatorio entre 1900 y 2021 en base al nro que obtiene de microA.
- microC detalla cuántos años pasaron desde el año generado por el microB hasta el presente.

Una vez construídas las imágenes y creado el container se acceden a los distintos microservicios a través:
- microA: http://localhost:4000/number
- microB: http://localhost:4001/year
- microC: http://localhost:3000/yearsago
