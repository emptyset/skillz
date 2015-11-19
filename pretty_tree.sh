#!/bin/sh

# list of exclusions
IGNORES=`sed -Ee '/^[[:space:]]*(#|$)/d' .hgignore | sed '1d' | sed 's/^.*lib/lib/g' | tr '\n' '|'`

# pass as arguments to tree
tree -I "$IGNORES" $@
