# credit to Will (a Google employee)
class Mapping:
  def __init__(self, samples):
    self.mappings = self.calc_mapping(samples)

  def calc_mapping(self, samples):
    mapping = [None] * 10
    # basic ones
    for sample in samples:
      if len(sample) == 2:
        mapping[1] = set(sample)
      if len(sample) == 3:
        mapping[7] = set(sample)
      if len(sample) == 4:
        mapping[4] = set(sample)
      if len(sample) == 7:
        mapping[8] = set(sample)
    # two-step
    for sample in samples:
      s = set(sample)
      if len(sample) == 6 and s > mapping[4]:
        mapping[9] = s
      if len(sample) == 5 and s > mapping[7]:
        mapping[3] = s
      if len(sample) == 6 and len(s & mapping[1]) == 1:
        mapping[6] = s
      if len(sample) == 6 and (not s > mapping[4]) and s > mapping[7]:
        mapping[0] = s
    for sample in samples:
      s = set(sample)
      if len(sample) == 5:
        side = s - mapping[3]
        if len(side) != 1:
          continue
        if side < mapping[4]:
          mapping[5] = s
        else:
          mapping[2] = s
    return mapping
  
  def to_number(self, string):
    s = set(string)
    for i, m in enumerate(self.mappings):
      if s == m:
        return i
    raise "oh no"

with open('example.txt') as f:
  total = 0
  for line in f.readlines():
    sample, number = line.split(' | ')
    mapping = Mapping(sample.split())
    result = 0
    for num in number.split():
      result *= 10
      digit = mapping.to_number(num)
      result += digit
    total += result
  print(total)