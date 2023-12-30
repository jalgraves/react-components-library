#!/bin/bash

for i in $(find . -type f -name "*.snap"); do
  rm "${i}"
done
