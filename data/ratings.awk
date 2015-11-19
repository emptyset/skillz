# this script helps to generate a JSON document from an intermediate file

BEGIN { FS=":"; OFS=":" }
!/[0-9]+/ { print $0 }
match($0, /[0-9]+/) { print "{" $1, substr($0, RSTART, RLENGTH) "}," }
END { }	

