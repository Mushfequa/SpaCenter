class Cricket:
  teamName = None
  def setTeamName(self,name):
    self.teamName=name
  def getTeamName(self):
    return self.teamName  
c = Cricket()
c.setTeamName('Australia')
print(c.getTeamName())   