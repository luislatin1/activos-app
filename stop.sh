#!/bin/bash

echo "Deteniendo servidor de Inventario y Manejo de Activos..."

# Encuentra el PID de todos los procesos nodemon y los termina
pkill -f "nodemon server.js"
