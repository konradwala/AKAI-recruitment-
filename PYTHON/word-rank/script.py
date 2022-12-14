#coding=utf-8

# input: array with multiple strings
# expected output: rank of the 3 most often repeated words in given set of strings and number of times they occured, case insensitive

sentences = [
    'Taki mamy klimat',
    'Wszędzie dobrze ale w domu najlepiej',
    'Wyskoczył jak Filip z konopii',
    'Gdzie kucharek sześć tam nie ma co jeść',
    'Nie ma to jak w domu',
    'Konduktorze łaskawy zabierz nas do Warszawy',
    'Jeżeli nie zjesz obiadu to nie dostaniesz deseru',
    'Bez pracy nie ma kołaczy',
    'Kto sieje wiatr ten zbiera burzę',
    'Być szybkim jak wiatr',
    'Kopać pod kimś dołki',
    'Gdzie raki zimują',
    'Gdzie pieprz rośnie',
    'Swoją drogą to gdzie rośnie pieprz?',
    'Mam nadzieję, że poradzisz sobie z tym zadaniem bez problemu',
    'Nie powinno sprawić żadnego problemu, bo Google jest dozwolony',
]
words = []
wordsVol2 = []
theMostPopularWords = []

for x in sentences:
    words = words + x.split( )

for x in words:
    wordsVol2.append(x.lower().replace("?", "").replace(",", ""))
    
wordsVol2.sort()

lastWord = ""
for x in wordsVol2:
    if x!=lastWord:
        theMostPopularWords.append([wordsVol2.count(x), x])
    lastWord = x

theMostPopularWords.sort(reverse=True)
theMostPopularWords = theMostPopularWords[0:3]

print(theMostPopularWords)


# Example result:
# 1. "mam" - 12
# 2. "tak" - 5
# 3. "z" - 2


# Good luck! You can write all the code in this file.


