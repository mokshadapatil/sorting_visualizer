function Selection_sort()
{
    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"#d9534f");

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#f0ad4e");

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"#0275d8");
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"#d9534f");
            }
            else
            {
                div_update(divs[j],div_sizes[j],"#0275d8");
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"#d9534f");
            div_update(divs[i],div_sizes[i],"#d9534f");//Height update
            div_update(divs[index_min],div_sizes[index_min],"#0275d8");
        }
        div_update(divs[i],div_sizes[i],"#5cb85c");
    }
    div_update(divs[i],div_sizes[i],"#5cb85c");

    enable_buttons();
}