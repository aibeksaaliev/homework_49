#!/bin/bash
cd ~
cd WebStormProjects/
mkdir homework_49
cd homework_49
git init
mkdir task_1
cd task_1
mkdir directory1 directory2 directory3
cd directory1
mkdir subdirectory1
cd ..
cd directory2
echo 'Hello from JS' > hello.txt
cd ..
cd directory3
mkdir subdirectory2
cd ..
cd ..
git add ./
git commit -m "Задание 1"
git log



