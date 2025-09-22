[Commands.txt](https://github.com/user-attachments/files/22455751/Commands.txt)

// "StAuth10222: I Bashshar Toloba, 000892187 certify that this material is my original work. 
// No other person's work has been used without due acknowledgement. I have not made my work available to anyone else."



Bot Description:
This Discord bot provides information about the sports industry using the Yelp API. 
Users can search for gyms, stadiums, sports bars, trainers, and sports leagues in specific locations.


 Commands:

1. !stadium <location>
   - Description: Finds the highest-rated stadium in a given location.
   - Arguments:
       <location> : The city or area to search for stadiums.
   - Example Usage:
       !stadium Toronto
   - Returns: Name, address, rating, top 3 

2. !gym <location>
   - Description: Lists the top 3 gyms in a specified location.
   - Arguments:
       <location> : The city or area to search for gyms.
   - Example Usage:
       !gym Hamilton
   - Returns: Name, rating, review count.

3. !trainer <specialty> <location>
   - Description: Lists the top 3 personal trainers for a specific specialty in a location.
   - Arguments:
       <specialty> : The type of trainer (e.g., yoga, boxing, fitness)
       <location>  : The city or area to search in.
   - Example Usage:
       !trainer boxing Toronto
   - Returns: Name, rating, and city for the top 3 trainers matching the specialty.

4. !league <sport> <location>
   - Description: Finds the top 3 sports leagues for a specific sport in a location.
   - Arguments:
       <sport>    : The sport to search for (e.g., soccer, basketball)
       <location> : The city or area to search in.
   - Example Usage:
       !league soccer Vancouver
   - Returns: Name, rating, and city for the top 3 leagues for that sport.

5. !sportsbar <sport> <location>
   - Description: Lists the top 3 sports bars related to a specific sport in a location.
   - Arguments:
       <sport>    : The sport associated with the bar (e.g., football, hockey)
       <location> : The city or area to search in.
   - Example Usage:
       !sportsbar hockey Montreal
   - Returns: Name, rating, and city for the top 3 sports bars.


- Commands with one argument:
 !stadium, !gym

- Commands with two arguments:
 !trainer, !league, !sportsbar
