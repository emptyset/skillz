# this script generates JSON technology, rating records from an intermediate file

BEGIN { FS=":"; OFS="," }
!/[0-9]+/ { print $0 }
match($0, /[0-9]+/) { print "\"technology\": " $1, "\"rating\":" substr($0, RSTART, RLENGTH) }
END { }	
