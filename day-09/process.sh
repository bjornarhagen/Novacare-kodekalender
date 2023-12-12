#!/bin/bash

dig -t txt kodeord.kodekalender.digital +short | sed 's/"//g' | base64 -d >output.txt
