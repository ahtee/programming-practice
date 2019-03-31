# 1.1 Implement an algorthms to determine if a string has all unique characters

def isUnique(word):
    i = 0
    unique_count = dict()
    status = True
    for char in word:
        if (unique_count.get(char, False)):
            unique_count[char] = char
        else:
            status = False
    if status:
        print "String " + word + " is unique :)"
    else:
        print "String " + word + " is not unique"

isUnique("Hello")
isUnique("Bo")