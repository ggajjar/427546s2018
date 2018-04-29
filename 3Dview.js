var marginx , marginy , widheight;

function onePoint(marginx , marginy , widheight)
		{
			c.clearRect(0 , 0 , can.width , can.height);
			
			frontView(marginx , marginy , widheight);
		}
		
		function drawShape(frontang , sideang , topang , frontsize , sidesize)
		{
			c.clearRect(0 , 0 , can.width , can.height);
		
			var frontangle = (frontang * Math.PI)/180;
			
			var x1 = marginx;
			var y1 = marginy;
			
			var x2 = parseInt(x1 + (frontsize * Math.cos(frontangle))); 
			var y2 = parseInt(y1 + (frontsize * Math.sin(frontangle))); 
			
			var midx = (x1 + x2)/2;
			var midy = (y1 + y2)/2;
			
			frontView1(x1 , y1 , x2 , y2 , frontsize , frontangle);
			
			var sideangle = -((sideang * Math.PI)/180);
			
			x1 = x2;
			y1 = y2;
			
			x2 = parseInt(x1 + (sidesize * Math.cos(sideangle))); 
			y2 = parseInt(y1 + (sidesize * Math.sin(sideangle)));
			
			sideView1(x1 , y1 , x2 , y2 , sidesize , sideangle);
			
			var tx = x2;
			var ty = y2 + (widheight/4);
			
			var topangle = -((topang * Math.PI)/180);
			
			x1 = marginx;
			y1 = marginy + (frontsize/4);
			
			x2 = parseInt(x1 + (sidesize * Math.cos(sideangle))); 
			y2 = parseInt(y1 + (sidesize * Math.sin(sideangle)));
			
			topView1(x1 , y1 , x2 , y2 , sidesize , topangle , midx , midy , tx , ty);
		}
		
		function dimetric(x , y ,size)
		{
			c.clearRect(0 , 0 , can.width , can.height);
			
			widheight = size;
			marginx = x;
			marginy = y;

			drawShape(15 , 30 , 30 , widheight , widheight);
		}
		
		function trimetric(x , y , size)
		{
			c.clearRect(0 , 0 , can.width , can.height);

			widheight = size;
			marginx = x;
			marginy = y;
			
			drawShape(15 , 15 , 15 , widheight , widheight);
		}
		
		function isometric(x , y , size)
		{
			c.clearRect(0 , 0 , can.width , can.height);
			
			widheight = size;
			marginx = x;
			marginy = y;

			var mainangle = 30;
			
			drawShape(mainangle , mainangle , mainangle , widheight , widheight);
		}
		
		function frontView1(x1 , y1 , x2 , y2 , size , angle)
		{
			//for roof
			drawLine((x1 + x2)/2 , (y1 + y2)/2 , x1 , y1 + (size/4));
			drawLine((x1 + x2)/2 , (y1 + y2)/2 , x2 , y2 + (size/4));
			
			//for walls
		
			drawLine(x1 , y1 + (size/4) , x1 , y1 + size);
			drawLine(x2 , y2 + (size/4) , x2 , y2 + size);
			drawLine(x1 , y1 + size , x2 , y2 + size);
			
			//for door
			len = (2 * size)/5;
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/5;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempxx , tempyy + (size/2));
			drawLine(tempx , tempy + (size/2) , tempx , tempy + size);
			drawLine(tempxx , tempyy + (size/2) , tempxx , tempyy + size);
			
			//for left window
			len = size/6;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/10;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempxx , tempyy + (size/2));
			drawLine(tempx , tempy + (3*size/4) , tempxx , tempyy + (3*size/4));
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			drawLine(tempxx , tempyy + (size/2) , tempxx , tempyy + (3*size/4));
			
			len = (size/6) + (size/20);
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			
			len = size/6;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/10;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (5*size/8) , tempxx , tempyy + (5*size/8));
			
			//for right window
			len = 4.5*size/6;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/10;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempxx , tempyy + (size/2));
			drawLine(tempx , tempy + (3*size/4) , tempxx , tempyy + (3*size/4));
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			drawLine(tempxx , tempyy + (size/2) , tempxx , tempyy + (3*size/4));
			
			len = (4.5*size/6) + (size/20);
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			
			len = 4.5*size/6;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/10;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (5*size/8) , tempxx , tempyy + (5*size/8));
		}
		
		function sideView1(x1 , y1 , x2 , y2 , size , angle)
		{
			//for walls
			drawLine(x1 , y1 + (size/4) , x1 , y1 + size);
			drawLine(x2 , y2 + (size/4) , x2 , y2 + size);
			drawLine(x1 , y1 + size , x2 , y2 + size);
			drawLine(x1 , y1 + (size/4) , x2 , y2 + (size/4));
			
			//left window
			len = size/5;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/10;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempxx , tempyy + (size/2));
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			drawLine(tempxx , tempyy + (size/2) , tempxx , tempyy + (3*size/4));
			drawLine(tempx , tempy + (3*size/4) , tempxx , tempyy + (3*size/4));
			
			drawLine(tempx , tempy + (5*size/8) , tempxx , tempyy + (5*size/8));
			
			len = size/4;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			
			//middle window
			len = 9*size/20;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/10;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempxx , tempyy + (size/2));
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			drawLine(tempxx , tempyy + (size/2) , tempxx , tempyy + (3*size/4));
			drawLine(tempx , tempy + (3*size/4) , tempxx , tempyy + (3*size/4));
			
			drawLine(tempx , tempy + (5*size/8) , tempxx , tempyy + (5*size/8));
			
			len = size/2;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			
			//right window
			len = 7*size/10;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			len = size/10;
			
			tempxx = parseInt(tempx + (len * Math.cos(angle)));
			tempyy = parseInt(tempy + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempxx , tempyy + (size/2));
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
			drawLine(tempxx , tempyy + (size/2) , tempxx , tempyy + (3*size/4));
			drawLine(tempx , tempy + (3*size/4) , tempxx , tempyy + (3*size/4));
			
			drawLine(tempx , tempy + (5*size/8) , tempxx , tempyy + (5*size/8));
			
			len = 3*size/4;
			
			tempx = parseInt(x1 + (len * Math.cos(angle)));
			tempy = parseInt(y1 + (len * Math.sin(angle)));
			
			drawLine(tempx , tempy + (size/2) , tempx , tempy + (3*size/4));
		}

		function topView1(x1 , y1 , x2 , y2 , size , angle , mx , my , lx , ly)
		{
			drawLine(x1 , y1 , x2 , y2);
			
			tempx = parseInt(mx + (size * Math.cos(angle))); 
			tempy = parseInt(my + (size * Math.sin(angle)));
			
			drawLine(mx , my , tempx , tempy);
			drawLine(x2 , y2 , tempx , tempy);
			drawLine(tempx , tempy , lx , ly);
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