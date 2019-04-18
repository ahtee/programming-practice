# Remove the duplicates from the array

def removeDuplicates(arr):
    # new map
    duplicateMap = { i: 0 for i in arr }

    for item in range(len(arr)):
        if (duplicateMap[arr[item]] == 0):
            duplicateMap[arr[item]] = 1

    return duplicateMap
