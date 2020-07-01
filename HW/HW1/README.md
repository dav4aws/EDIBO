**Uzdevuma apraksts:**
Analysis of windows event logs using pandas DataFrame

**Kas ir pandas DataFrame?**
Two-dimensional, size-mutable, potentially heterogeneous tabular data.

**Formats:**
class pandas.DataFrame(data=None, index: Optional[Collection] = None, columns: Optional[Collection] = None, dtype: Optional[Union[str, numpy.dtype, ExtensionDtype]] = None, copy: bool = False)

**Parametri:**
data = ndarray (structured or homogeneous), Iterable, dict, or DataFrame
Dict can contain Series, arrays, constants, or list-like objects.

index = index or arry-like
Index to use for resulting frame. Will default to RangeIndex if no indexing information part of input data and no index provided.

columns = index or arry-like
Column labels to use for resulting frame. Will default to RangeIndex (0, 1, 2, …, n) if no column labels are provided.

dtype = dtype, default None
Data type to force. Only a single dtype is allowed. If None, infer.

copy = copy, default False
Copy data from inputs. Only affects DataFrame / 2d ndarray input.

**Piemers:**
d = {'col1': [1, 2], 'col2': [3, 4]}
df = pd.DataFrame(data=d)
df
   col1  col2
0     1     3
1     2     4

vai

df2 = pd.DataFrame(np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
...                    columns=['a', 'b', 'c'])
df2
   a  b  c
0  1  2  3
1  4  5  6
2  7  8  9



**Grafiska analize Pythona:**

Jaizmanto matplotlib.

**Instalacija:**

pip install matplotlib

**Piemeri:**

importing the required module 
import matplotlib.pyplot as plt 
  
x axis values 
x = [1,2,3] 
corresponding y axis values 
y = [2,4,1] 
  
plotting the points  
plt.plot(x, y) 
  
naming the x axis 
plt.xlabel('x - axis') 

naming the y axis 
plt.ylabel('y - axis') 
  
giving a title to my graph 
plt.title('My first graph!') 
  
function to show the plot 
plt.show()

[IMAGE](https://media.geeksforgeeks.org/wp-content/uploads/graph-plotting-1.png)
