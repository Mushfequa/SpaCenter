import camelcase
c = camelcase.CamelCase()
txt = "mushfequa leswala"
txt1 = "sabera leswala"
txt2 = "Mubassera Leswala"
print(c.hump(txt))
print(c.hump(txt1))
print(c.hump(txt2))