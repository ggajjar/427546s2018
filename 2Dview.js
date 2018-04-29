function frontView(x , y , size)
		{
			//for roof
			drawLine(x + (size/2) , y , x , y + (size/4));
			drawLine(x + (size/2) , y , x + size , y + (size/4));
			
			//for walls
			drawLine(x , y + (size/4) , x , y + size);
			drawLine(x + size , y + (size/4) , x + size , y + size);
			drawLine(x , y + size , x + size , y + size);
			
			//for door
			drawRect(x + (size/2) - (size/10) , y + (size/2) , (size/5) , (size/2));
			
			//left window
			drawRect(x + (size/6.5) , y + (size/2) , (size/10) , (size/4));
			drawRect(x + (size/6.5) + (size/20) , y + (size/2) , 0 , size/4);
			drawRect(x + (size/6.5) , y + (size/2) + (size/8) , (size/10) , 0);
			
			//right window
			drawRect(x + size - (size/4.2) , y + (size/2) , (size/10) , (size/4));
			drawRect(x + size - (size/4.2) + (size/20) , y + (size/2) , 0 , size/4);
			drawRect(x + size - (size/4.2) , y + (size/2) + (size/8) , (size/10) , 0);
		}
		
		function sideView(x , y , size)
		{
			var xmargin = (x) + size + (size/10);
		
			//roof
			drawRect(xmargin , y , size , (size/4));
			
			//wall
			drawRect(xmargin , y + (size/4) , size , 3*(size/4));
			
			//left window
			drawRect(xmargin + (size/5) , y + (size/2) , (size/10) , (size/4));
			drawRect(xmargin + (size/5) + (size/20) , y + size/2 , 0 , size/4);
			drawRect(xmargin + (size/5) , y + (size/2) + (size/8) , (size/10) , 0);
			
			//right window
			drawRect(xmargin + size - (size/5) - (size/10) , y + (size/2) , (size/10) , (size/4));
			drawRect(xmargin + size - (size/5) - (size/10) + (size/20) , y + (size/2) , 0 , (size/4));
			drawRect(xmargin + size - (size/5) - (size/10) , y + (size/2) + (size/8) , (size/10) , 0);
			
			//middle window
			drawRect(xmargin + (size/2) - (size/20) , y + (size/2) , (size/10) , (size/4));
			drawRect(xmargin + (size/2) - (size/20) + (size/20) , y + (size/2) , 0 , (size/4));
			drawRect(xmargin + (size/2) - (size/20) , y + (size/2) + (size/8) , (size/10) , 0);
		}

		function topView(x , y , size)
		{
			var ymargin = y + size + (size/10);
			
			drawRect(x , ymargin , size/2 , size);
			drawRect(x + (size/2), ymargin , size/2 , size);
		}
		
		function drawLine(pt1x , pt1y , pt2x , pt2y)
		{
			c.fillRect(pt1x , pt1y , pixsize , pixsize);
				
			var dx = pt2x - pt1x;
			var dy = pt2y - pt1y;
				
			var length = Math.sqrt((dx * dx) + (dy * dy));
				
			var cos = dx/length;
			var sin = dy/length;
				
			var i;
			var ptx , pty;
				
			for(i = 0 ; i < length ; i++)
			{
				ptx = Math.floor(pt1x + (i * cos));
				pty = Math.floor(pt1y + (i * sin));
				
				c.fillRect(ptx , pty , pixsize , pixsize);
			}
		}
		
		function drawRect(x , y , w , h)
		{
			drawLine(x , y , x + w , y);
			drawLine(x + w , y , x + w , y + h);
			drawLine(x + w , y + h , x , y + h);
			drawLine(x , y + h , x , y);
		}