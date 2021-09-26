const Infos = [
    { id : 0, title: 'Default'},
    { 
        id : 1, title: 'Bubble Sort',
        intro : 'Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.',

        complexity : 
        <table>
            <thead>
            <tr>
                <th colspan="3" className="tbh1">Time Complexity</th>
                <th rowspan="2" className="tbh2">Space Complexity</th> 
            </tr>
            <tr>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>  
            </tr>             
            </thead>
            <tbody>
                <tr>
                    <td>O(n)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(1)</td>
                </tr>
            </tbody>
        </table>,
        // pseudoCode :"https://pastebin.com/embed_iframe/gxXFjfRh",
        pseudoCode :
        <code>
          <strong>
          &emsp;&emsp;&emsp;begin BubbleSort(list)                  <br /></strong>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;for all elements of list            <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;if list[i] &gt; list[i+1]          <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;swap(list[i], list[i+1])    <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;end if                          <br/>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;end for                             <br />
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;return list                             <br />
          <strong>&emsp;&emsp;&emsp;end BubbleSort   </strong>                       <br />
          </code>
        ,
        gif : './Assets/BubbleSort.gif',

        readingLink : 'https://www.geeksforgeeks.org/bubble-sort/',
        videoLink : 'https://youtu.be/bBQkErahU9c'
    },
    {   id : 2, title: 'Selection Sort',
        intro : 'Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end. Initially, the sorted part is empty and the unsorted part is the entire list.',

        complexity : 
        <table>
            <thead>
            <tr>
                <th colspan="3" className="tbh1">Time Complexity</th>
                <th rowspan="2" className="tbh2">Space Complexity</th> 
            </tr>
            <tr>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>  
            </tr>             
            </thead>
            <tbody>
                <tr>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(1)</td>
                </tr>
            </tbody>
        </table>,
        // pseudoCode :"https://pastebin.com/embed_iframe/gxXFjfRh",
        pseudoCode :
        <code>
            procedure selection sort <br/>
&emsp;&emsp;&emsp;                list  : array of items<br/>
&emsp;&emsp;&emsp;                n     : size of list<br/>

&emsp;&emsp;&emsp;                for i = 1 to n - 1<br/>
<span className="comment" >&emsp;&emsp;&emsp;                /* set current element as minimum*/</span><br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                    min = i    <br/>


&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                    for j = i+1 to n <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                        if list[j] &gt; list[min] then<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                            min = j;<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                       end if<br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                    end for<br/>

&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                    if indexMin != i  then  <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                        swap list[min] and list[i]  <br/>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                    end if<br/>
&emsp;&emsp;&emsp;             end for<br/>
                
            end procedure <br/>
        </code>
        ,
        gif : './Assets/BubbleSort.gif',

        readingLink : 'https://www.geeksforgeeks.org/selection-sort/',
        videoLink : 'https://youtu.be/B-nqY6IYqVw'
     },
    { id : 3, title: 'Insertion Sort',
        intro : 'Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.',


        complexity : 
        <table>
            <thead>
            <tr>
                <th colspan="3" className="tbh1">Time Complexity</th>
                <th rowspan="2" className="tbh2">Space Complexity</th> 
            </tr>
            <tr>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>  
            </tr>             
            </thead>
            <tbody>
                <tr>
                    <td>O(n)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(1)</td>
                </tr>
            </tbody>
        </table>,

        // pseudoCode :"https://pastebin.com/embed_iframe/gxXFjfRh",
        pseudoCode :
        <code>
        procedure insertionSort( A : array of items )  <br />
        &emsp;&emsp;&emsp;            int holePosition                <br />
        &emsp;&emsp;&emsp;    int valueToInsert               <br />
                
        &emsp;&emsp;&emsp;           for i = 1 to length(A) inclusive do:        <br />
                
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;      <span className="comment">          /* select value to be inserted */  </span> <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;               valueToInsert = A[i]    <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                holePosition = i    <br />
                
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;   <span className="comment">             /*locate hole position for the element to be inserted */ </span> <br />
                    
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;               while holePosition  &gt; 0 and A[holePosition-1]  &gt; valueToInsert do:    <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                   A[holePosition] = A[holePosition-1] <br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;                   holePosition = holePosition -1<br />
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;               end while<br />
                    
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;    <span className="comment">            /* insert the number at hole position */ </span><br /> 
        &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;               A[holePosition] = valueToInsert<br />
                
        &emsp;&emsp;&emsp;           end for<br />
                
           end procedure<br />
        </code>
        ,
        gif : './Assets/BubbleSort.gif',

        readingLink : 'https://www.geeksforgeeks.org/insertion-sort/',
        videoLink : 'https://youtu.be/wWhAhp6PIuQ'
    },
    { id : 4, title: 'Quick Sort',
        intro : 'Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value. Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets',


        complexity : 
        <table>
            <thead>
            <tr>
                <th colspan="3" className="tbh1">Time Complexity</th>
                <th rowspan="2" className="tbh2">Space Complexity</th> 
            </tr>
            <tr>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>  
            </tr>             
            </thead>
            <tbody>
                <tr>
                    <td>O(nlog(n))</td>
                    <td>O(nlog(n))</td>
                    <td>O(n<sup>2</sup>)</td>
                    <td>O(log(n))</td>
                </tr>
            </tbody>
        </table>,


        // pseudoCode :"https://pastebin.com/embed_iframe/gxXFjfRh",
        pseudoCode :
        <>
        <h6>Quick sort</h6>
        <code>
            QuickSort(arr[], low, high):  <br/>
            &emsp;&emsp;&emsp;                if (low &lt; high) :  <br />
            &emsp;&emsp;&emsp;     <span className="comment">    /* pi is partitioning index, arr[pi] is now at right place */</span> <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         pivot = partition(arr, low, high) <br/>

            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         quickSort(arr, low, pivot - 1)   <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         quickSort(arr, pivot + 1, high)   <br/>
            &emsp;&emsp;&emsp;     end if <br/>
            end QuickSort  <br/>
        </code> <br />
        <h6>Partition</h6>
        <code>
            Partition(arr[], low, high): <br/>

            &emsp;&emsp;&emsp;             <span className="comment">    // pivot (Element to be placed at right position) </span> <br />
            &emsp;&emsp;&emsp;     pivot = arr[high]  <br />
            
            &emsp;&emsp;&emsp;     i = (low - 1) <span className="comment"> // Index of smaller element and indicates the                                                                      <br />
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;                // right position of pivot found so far </span> <br/>

            &emsp;&emsp;&emsp;     for (j = low; j &lt;= high- 1; j++): <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;     <span className="comment">// If current element is smaller than the pivot  </span><br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         if (arr[j] &lt; pivot): <br />
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;             i++;   <span className="comment"> // increment index of smaller element</span>  <br />
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;             swap arr[i] and arr[j]    <br />
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         end if   <br />
            &emsp;&emsp;&emsp;     end for  <br />

            &emsp;&emsp;&emsp;     swap arr[i + 1] and arr[high]) <br/>

            &emsp;&emsp;&emsp;     return (i + 1) <br/>
            end Partition
        </code>
        </>
        ,
        gif : './Assets/BubbleSort.gif',

        readingLink : 'https://www.geeksforgeeks.org/quick-sort/',
        videoLink : 'https://youtu.be/UA_Rmjfj4bw'
    },
    { id : 5, title: 'Merge Sort',
        intro : 'Merge Sort is one of the most popular sorting algorithms that is based on the principle of Divide and Conquer Algorithm. Here, a problem is divided into multiple sub-problems. Each sub-problem is solved individually. Finally, sub-problems are combined to form the final solution.',

        complexity : 
        <table>
            <thead>
            <tr>
                <th colspan="3" className="tbh1">Time Complexity</th>
                <th rowspan="2" className="tbh2">Space Complexity</th> 
            </tr>
            <tr>
                <th>Best Case</th>
                <th>Average Case</th>
                <th>Worst Case</th>  
            </tr>             
            </thead>
            <tbody>
                <tr>
                    <td>O(nlog(n))</td>
                    <td>O(nlog(n))</td>
                    <td>O(nlog(n))</td>
                    <td>O(n)</td>
                </tr>
            </tbody>
        </table>,


        // pseudoCode :"https://pastebin.com/embed_iframe/gxXFjfRh",
        pseudoCode :
        <>
        <h6>Merge sort</h6>
        <code>
           MergeSort(arr, left, right): <br/>
           &emsp;&emsp;&emsp;                 if left &gt; right <br/>
           &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;                     return<br/>
           &emsp;&emsp;&emsp;                 mid = (left+right)/2<br/>
           &emsp;&emsp;&emsp;                mergeSort(arr, left, mid)<br/>
           &emsp;&emsp;&emsp;                mergeSort(arr, mid+1, right)<br/>
           &emsp;&emsp;&emsp;                 merge(arr, left, mid, right)<br/>
            end<br/>


        </code> <br />
        <h6>Merge</h6>
        <code>
            Merge(arr, start, mid, end): <br/>
            &emsp;&emsp;&emsp;                 i = start;                  <br/>
            &emsp;&emsp;&emsp;     j = middleIndex + 1;        <br/>
            &emsp;&emsp;&emsp;     k = start                      <br/>
            &emsp;&emsp;&emsp;     copyArray = arr;               <br/>
            &emsp;&emsp;&emsp;     while (i &lt;= mid && j &lt;= end) <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         if ( copyArray[i] &lt;= copyArray[j] ) <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;             arr[k++] = copyArray[i++]    <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         else                                <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;             arr[k++] = copyArray[j++]           <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         end if                                  <br/>
            &emsp;&emsp;&emsp;     end while                                   <br/>
                
            &emsp;&emsp;&emsp;     while (i &lt;= mid)                          <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         arr[k++] = copyArray[i++]                  <br/>
            &emsp;&emsp;&emsp;     end while                                      <br/>
                
            &emsp;&emsp;&emsp;     while (j &lt;= end)                             <br/>
            &emsp;&emsp;&emsp; &emsp;&emsp;&emsp;         arr[k++] = copyArray[j++]                   <br/>
            &emsp;&emsp;&emsp;     end while                                       <br/>
                
                return arr;                                <br/>
                end Merge
        </code>
        </>
        ,
        gif : './Assets/BubbleSort.gif',

        readingLink : 'https://www.geeksforgeeks.org/merge-sort/',
        videoLink : 'https://youtu.be/aDX3MFL0tYs'
    },
];



export default Infos;