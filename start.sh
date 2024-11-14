#!/bin/bash

echo "Iniciando servidor de Inventario y Manejo de Activos..."

# Inicia el servidor usando nodemon en segundo plano
npx nodemon server.js &

