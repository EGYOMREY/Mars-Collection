"use strict";$(document).ready(function(){function t(t,o){return Math.floor(Math.random()*(o-t+1)+t)}function o(t,o,n,s,a,r){$.getJSON(t,{format:"json"}).done(function(t){if(i.html(""),console.log(t.photos.length),t.photos.length>7){for(var l=0;l<s;l+=2){var h=document.createElement("img");h.width=o,h.height=n,h.src=t.photos[l].img_src,h.style.margin="1em 0",e.appendChild(h)}i.append(e)}else i.html("No pictures for "+a+" on day "+r+", please hit the botton again!")}).fail(function(){console.log("error")}).always(function(){console.log("Rover "+a+". Martial Day "+r+" chosen")})}var e=document.createDocumentFragment(),n=["dummy","opportunity","curiosity","spirit"],i=$(".photosContainer"),s=$("#randomButton"),a=$("#searchButton"),r=$("#rangeImagesToDisplay"),l=$("#rangeHeightImage"),h=$("#rangeWidthImage"),p=$("#imagesToDisplayText"),c=$("#widthImageText"),m=$("#heightImageText"),u=$("#spirit"),g=$("#curiosity"),d=$("#opportunity"),v="curiosity",f=10,y=300,k=300,b=void 0,T=void 0,C=void 0,w=void 0;p.html(5),c.html(y),m.html(k),r.on("input",function(){p.html($(this).val()),f=$(this).val(),f*=2}),h.on("input",function(){c.html($(this).val()),y=$(this).val()}),l.on("input",function(){m.html($(this).val()),k=$(this).val()}),$(".roverButton").click(function(){v=$(this)[0].id,u.removeClass("btn-pressed"),g.removeClass("btn-pressed"),d.removeClass("btn-pressed"),$(this).toggleClass("btn-pressed")}),a.on("click",function(){C=t(1e3,2e3),o(w="https://api.nasa.gov/mars-photos/api/v1/rovers/"+v+"/photos?sol="+C+"&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc",y,k,f,v,C)}),s.on("click",function(){b=Math.floor(3*Math.random())+1,T=n[b],C=t(1e3,2e3),o(w="https://api.nasa.gov/mars-photos/api/v1/rovers/"+T+"/photos?sol="+C+"&page=1&api_key=LQlfelUbO5f0rqk5UAS9REF5XhtwkG6oFX5TWOsc",y,k,f,T,C)})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsInVybCIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFqYXhDYWxsIiwicGhvdG9zIiwid2lkdGhWYWx1ZSIsImhlaWdodFZhbHVlIiwicGljdHVyZXNUb0Rpc3BsYXkiLCJjaG9zZW5Sb3ZlciIsInNvbFBhcmFtZXRlciIsImdldEpTT04iLCJmb3JtYXQiLCJpbWciLCJodG1sIiwic3JjIiwiZGF0YSIsInN0eWxlIiwibWFyZ2luIiwiaSIsInBob3Rvc0NvbnRhaW5lciIsImFwcGVuZCIsImNyZWF0ZUVsZW1lbnQiLCJ3aWR0aCIsImltZ19zcmMiLCJmcmFnIiwiYXBwZW5kQ2hpbGQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImFsd2F5cyIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJyb3ZlcnMiLCJzZWFyY2hCdXR0b24iLCJyYW5nZUltYWdlc1RvRGlzcGxheSIsInJhbmdlSGVpZ2h0SW1hZ2UiLCJyYW5nZVdpZHRoSW1hZ2UiLCJ3aWR0aEltYWdlVGV4dCIsImhlaWdodEltYWdlVGV4dCIsImN1cmlvc2l0eUJ1dHRvbiIsIm9wcG9ydHVuaXR5QnV0dG9uIiwiY2hvc2VuUmFuZG9tIiwiaW1hZ2VzVG9EaXNwbGF5VGV4dCIsIm9uIiwidGhpcyIsInZhbCIsInNwaXJpdEJ1dHRvbiIsInJlbW92ZUNsYXNzIiwiaWQiLCJ0b2dnbGVDbGFzcyIsInJhbmRvbVJvdmVyIiwicmFuZG9taXplIl0sIm1hcHBpbmdzIjoiYUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQWlEZCxTQUFJQyxFQUFKQyxFQUFBQyxHQUlJLE9BQU9DLEtBQUtDLE1BQU1ELEtBQUtFLFVBQVlILEVBQU1ELEVBQU0sR0FBS0EsR0F1RTVDLFNBQUFLLEVBQVNDLEVBQUxDLEVBQUpDLEVBQTRCQyxFQUFBQyxFQUFBQyxHQU5wQ2YsRUFBRWdCLFFBQVFiLEdBUUVjLE9BQUssU0FFREMsS0FBQUEsU0FBQUEsR0FHQUEsR0FGQUEsRUFBQUMsS0FBYVAsSUFDYk0sUUFBSUUsSUFBSkMsRUFBVUEsT0FBS1gsUUFDZlEsRUFBSUksT0FBTUMsT0FBUyxFQUFBLENBR3RCLElBQUEsSUFBQUMsRUFBQSxFQUFBQSxFQUFBWCxFQUFBVyxHQUFBLEVBQUEsQ0FDREMsSUFBQUEsRUFBZ0JDLFNBQWhCQyxjQUFBLE9BQ0dULEVBQUFVLE1BQUFqQixFQUNIYyxFQUFBQSxPQUFBYixFQUNITSxFQUFBRSxJQUFBQyxFQUFBWCxPQUFBYyxHQUFBSyxRQUVDWCxFQUFXSSxNQUFBQyxPQUFBLFFBQ0RPLEVBQUFDLFlBQVpiLEdBdkJSTyxFQUFBQyxPQUFBSSxRQXRIUkwsRUFBQU4sS0FBQSxtQkFBQUwsRUFBQSxXQUFBQyxFQUFBLG9DQTRJYWlCLEtBQUssV0FDRkMsUUFBUUMsSUFBSSxXQUVmQyxPQUFPLFdBQ0pGLFFBQVFDLElBQVIsU0FBcUJwQixFQUFyQixpQkFBaURDLEVBQWpELGFBNUlaLElBQU1lLEVBQU83QixTQUFTbUMseUJBRWhCQyxHQUFVLFFBQVMsY0FBZSxZQUFhLFVBQS9DQSxFQUFtQnJDLEVBQUEsb0JBR25CeUIsRUFBQUEsRUFBa0J6QixpQkFJbEJzQyxFQUFldEMsRUFBRSxpQkFJakJ1QyxFQUF1QnZDLEVBQUUseUJBRC9Cd0MsRUFBQXhDLEVBQUEscUJBRUF5QyxFQUFBekMsRUFBQSxvQkFHTXlDLEVBQW9CekMsRUFBQSx3QkFJcEIwQyxFQUFpQjFDLEVBQUUsbUJBRnpCMkMsRUFBQTNDLEVBQUEsb0JBR00yQyxFQUFBQSxFQUFrQjNDLFdBSWxCNEMsRUFBa0I1QyxFQUFFLGNBRjFCNkMsRUFBQTdDLEVBQUEsZ0JBRU00QyxFQUFBQSxZQUdGOUIsRUFBYyxHQUVsQkgsRUFBQSxJQUVBQyxFQUFBLElBR0lBLE9BQUFBLEVBRUprQyxPQUFBQSxFQUVBL0IsT0FBQUEsRUFFQVosT0FBQUEsRUFZQTRDLEVBQW9CNUIsS0FBSyxHQUR6QnVCLEVBQUF2QixLQUFBUixHQUNBb0MsRUFBQUEsS0FBb0I1QixHQU9wQm9CLEVBQXFCUyxHQUFHLFFBQVMsV0FDN0JELEVBQW9CNUIsS0FBS25CLEVBQUVpRCxNQUFNQyxPQUNqQ3JDLEVBQW9CYixFQUFFaUQsTUFBTUMsTUFFNUJyQyxHQUFxQixJQUd6QjRCLEVBQWdCTyxHQUFHLFFBQVMsV0FDeEJOLEVBQWV2QixLQUFLbkIsRUFBRWlELE1BQU1DLE9BQzVCdkMsRUFBYVgsRUFBRWlELE1BQU1DLFFBR3pCVixFQUFpQlEsR0FBRyxRQUFTLFdBQ3pCTCxFQUFnQnhCLEtBQUtuQixFQUFFaUQsTUFBTUMsT0FDN0J0QyxFQUFjWixFQUFFaUQsTUFBTUMsUUFNdEJwQyxFQUFBQSxnQkFBY2QsTUFBQSxXQUNkbUQsRUFBYUMsRUFBQUEsTUFBQUEsR0FBWUMsR0FDekJULEVBQUFBLFlBQWdCUSxlQUNoQlAsRUFBQUEsWUFBa0JPLGVBQ2xCcEQsRUFBUXNELFlBQVksZUFMeEJ0RCxFQUFBaUQsTUFBQUssWUFBQSxpQkFXQWhCLEVBQWFVLEdBQUcsUUFBUyxXQUlyQnZDLEVBQWNFLEVBQWQsSUFBMEJDLEtBSzlCSCxFQVRBTixFQUFBLGtEQUFBVyxFQUFBLGVBQUFDLEVBQUEsMkRBU0FKLEVBQUFDLEVBQUFDLEVBQUFDLEVBQUFDLEtBTUlaLEVBQU02QyxHQUFBLFFBQUEsV0FFTnZDLEVBQWNFLEtBQUFBLE1BQXlCRSxFQUF2Q1AsS0FBMEJNLFVBQWFDLEVBUDNDaUMsRUFBQVQsRUFBQWtCLEdBSUl4QyxFQUFleUMsRUFBVSxJQUFNLEtBUy9CeEQsRUFGSkcsRUFBQSxrREFBQTJDLEVBQUEsZUFBQS9CLEVBQUEsMkRBRUlKLEVBQWVDLEVBQUFDLEVBQUFpQyxFQUFBL0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoKCkgPT4ge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAgIC8vIC0tICAgICAgICAgICAgICAgVkFSSUFCTEVTIFVTRUQgICAgICAgICAgICAgIC0tIC8vXHJcbiAgICBjb25zdCBmcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgLy8gLS0gU2V0IGEgZHVtbXkgZWxlbWVudCBmb3IgcG9zaXRpb24gMCAtLSAvL1xyXG4gICAgY29uc3Qgcm92ZXJzID0gWydkdW1teScsICdvcHBvcnR1bml0eScsICdjdXJpb3NpdHknLCAnc3Bpcml0J107XHJcblxyXG4gICAgLy8gLS0gQ29udGFpbmVyIGZvciBkaXNwbGF5aW5nIHRoZSBwaWN0dXJlcyAtLSAvL1xyXG4gICAgY29uc3QgcGhvdG9zQ29udGFpbmVyID0gJCgnLnBob3Rvc0NvbnRhaW5lcicpO1xyXG5cclxuICAgIC8vIC0tIEJ1dHRvbiB0byBzZWFyY2ggZm9yIHRoZSBwaWN0dXJlcyAtLSAvL1xyXG4gICAgY29uc3QgcmFuZG9tQnV0dG9uID0gJCgnI3JhbmRvbUJ1dHRvbicpO1xyXG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gJCgnI3NlYXJjaEJ1dHRvbicpO1xyXG5cclxuICAgIC8vIC0tICAgICAgIFJBTkdFIElOUFVUIChVc2VyIGNob2ljZSkgICAgICAgIC0tIC8vXHJcbiAgICAvLyAtLSBSYW5nZSBpbnB1dCBmb3IgIyBvZiBQaWN0dXJlcyB0byBkaXNwbGF5IC0tIC8vXHJcbiAgICBjb25zdCByYW5nZUltYWdlc1RvRGlzcGxheSA9ICQoJyNyYW5nZUltYWdlc1RvRGlzcGxheScpO1xyXG4gICAgLy8gLS0gUmFuZ2UgaW5wdXQgdG8gU2VsZWN0IEhFSUdIVCBvZiB0aGUgcGljdHVyZXMgLS0gLy9cclxuICAgIGNvbnN0IHJhbmdlSGVpZ2h0SW1hZ2UgPSAkKCcjcmFuZ2VIZWlnaHRJbWFnZScpO1xyXG4gICAgLy8gLS0gUmFuZ2UgaW5wdXQgdG8gU2VsZWN0IFdJRFRIIG9mIHRoZSBwaWN0dXJlcyAtLSAvL1xyXG4gICAgY29uc3QgcmFuZ2VXaWR0aEltYWdlID0gJCgnI3JhbmdlV2lkdGhJbWFnZScpO1xyXG5cclxuICAgIC8vIC0tICAgICBSQU5HRSBWQUxVRSBESVNQTEFZIGZvciBIVE1MICAgICAtLSAvL1xyXG4gICAgY29uc3QgaW1hZ2VzVG9EaXNwbGF5VGV4dCA9ICQoJyNpbWFnZXNUb0Rpc3BsYXlUZXh0Jyk7XHJcbiAgICBjb25zdCB3aWR0aEltYWdlVGV4dCA9ICQoJyN3aWR0aEltYWdlVGV4dCcpO1xyXG4gICAgY29uc3QgaGVpZ2h0SW1hZ2VUZXh0ID0gJCgnI2hlaWdodEltYWdlVGV4dCcpO1xyXG5cclxuICAgIC8vIC0tICAgICBSb3ZlciBCdXR0b25zICAgICAtLSAvL1xyXG4gICAgY29uc3Qgc3Bpcml0QnV0dG9uID0gJCgnI3NwaXJpdCcpO1xyXG4gICAgY29uc3QgY3VyaW9zaXR5QnV0dG9uID0gJCgnI2N1cmlvc2l0eScpO1xyXG4gICAgY29uc3Qgb3Bwb3J0dW5pdHlCdXR0b24gPSAkKCcjb3Bwb3J0dW5pdHknKTtcclxuICAgIC8vIC0tIERlZmF1bHQgdmFsdWUgLS0gLy9cclxuICAgIGxldCBjaG9zZW5Sb3ZlciA9ICdjdXJpb3NpdHknO1xyXG5cclxuICAgIC8vIC0tICAgICBERUZBVUxUIFZBTFVFUyBGT1IgREVGQVVMVCBTRUFSQ0ggICAgIC0tIC8vXHJcbiAgICBsZXQgcGljdHVyZXNUb0Rpc3BsYXkgPSAxMDtcclxuICAgIC8vIC0tIFBpY3R1cmUgd2lkdGggLS0gLy9cclxuICAgIGxldCB3aWR0aFZhbHVlID0gMzAwO1xyXG4gICAgLy8gLS0gUGljdHVyZSBoZWlnaHQgLS0gLy9cclxuICAgIGxldCBoZWlnaHRWYWx1ZSA9IDMwMDtcclxuXHJcbiAgICAvLyAtLSBTdG9yZXMgYSByYW5kb20gcm92ZXItLSAvL1xyXG4gICAgbGV0IHJhbmRvbVJvdmVyO1xyXG4gICAgLy8gLS0gU3RvcmVzIHRoZSBjaG9zZW4gUmFuZG9tIHJvdmVyLS0gLy9cclxuICAgIGxldCBjaG9zZW5SYW5kb207XHJcbiAgICAvLyAtLSBTdG9yZXMgdGhlIE1hcnRpYW4gZGF5IHBhcmFtZXRlciAoU29sKSBmb3IgdGhlIHVybCAtLSAvL1xyXG4gICAgbGV0IHNvbFBhcmFtZXRlcjtcclxuICAgIC8vIC0tIFN0b3JlcyB0aGUgVVJMIHZhbHVlIC0tIC8vXHJcbiAgICBsZXQgdXJsO1xyXG5cclxuICAgIC8vIC0tIEdlbmVyaWMgcmFuZG9taXplIGZ1bmN0aW9uLS0gLy9cclxuICAgIGZ1bmN0aW9uIHJhbmRvbWl6ZShtaW4sIG1heCkge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAtLSAgICAgREVGQVVMVCBWQUxVRVMgZGlzcGxheWVkIGluIHRoZSBIVE1MICAgICAtLSAvL1xyXG4gICAgaW1hZ2VzVG9EaXNwbGF5VGV4dC5odG1sKDUpO1xyXG4gICAgd2lkdGhJbWFnZVRleHQuaHRtbCh3aWR0aFZhbHVlKTtcclxuICAgIGhlaWdodEltYWdlVGV4dC5odG1sKGhlaWdodFZhbHVlKTtcclxuXHJcblxyXG5cclxuICAgIC8vIC0tICAgICBFVkVOVFMgVE8gQ09MTEVDVCBVU0VSIElOUFVUIE9OIFJBTkdFUyAgICAgLS0gLy9cclxuICAgIHJhbmdlSW1hZ2VzVG9EaXNwbGF5Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGltYWdlc1RvRGlzcGxheVRleHQuaHRtbCgkKHRoaXMpLnZhbCgpKTtcclxuICAgICAgICBwaWN0dXJlc1RvRGlzcGxheSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgLy8gSSBtdWx0aXBsaWVkIHRoZSB1c2VyIGNob2ljZSBieSAyIGJlY2F1c2UgdGhlIHJlc3VsdHMgYWx3YXlzIGJyaW5nIGR1cGxpY2F0ZXNcclxuICAgICAgICBwaWN0dXJlc1RvRGlzcGxheSAqPSAyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmFuZ2VXaWR0aEltYWdlLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHdpZHRoSW1hZ2VUZXh0Lmh0bWwoJCh0aGlzKS52YWwoKSk7XHJcbiAgICAgICAgd2lkdGhWYWx1ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByYW5nZUhlaWdodEltYWdlLm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGhlaWdodEltYWdlVGV4dC5odG1sKCQodGhpcykudmFsKCkpO1xyXG4gICAgICAgIGhlaWdodFZhbHVlID0gJCh0aGlzKS52YWwoKTtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyAtLSAgICAgRlVOQ1RJT04gVE8gU0VMRUNUIFJPVkVSIChVc2VyIGNob2ljZSkgICAgIC0tIC8vXHJcbiAgICAkKCcucm92ZXJCdXR0b24nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICAgICBjaG9zZW5Sb3ZlciA9ICQodGhpcylbMF0uaWQ7XHJcbiAgICAgICAgc3Bpcml0QnV0dG9uLnJlbW92ZUNsYXNzKCdidG4tcHJlc3NlZCcpO1xyXG4gICAgICAgIGN1cmlvc2l0eUJ1dHRvbi5yZW1vdmVDbGFzcygnYnRuLXByZXNzZWQnKTtcclxuICAgICAgICBvcHBvcnR1bml0eUJ1dHRvbi5yZW1vdmVDbGFzcygnYnRuLXByZXNzZWQnKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdidG4tcHJlc3NlZCcpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICAvLyAtLSAgICAgRlVOQ1RJT04gVE8gVFJJR0dFUiBERUZBVUxUIFNFQVJDSCAgICAgLS0gLy9cclxuICAgIHNlYXJjaEJ1dHRvbi5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICBzb2xQYXJhbWV0ZXIgPSByYW5kb21pemUoMTAwMCwgMjAwMCk7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYXBpLm5hc2EuZ292L21hcnMtcGhvdG9zL2FwaS92MS9yb3ZlcnMvJyArIGNob3NlblJvdmVyICsgJy9waG90b3M/c29sPScgKyBzb2xQYXJhbWV0ZXIgKyAnJnBhZ2U9MSZhcGlfa2V5PUxRbGZlbFViTzVmMHJxazVVQVM5UkVGNVhodHdrRzZvRlg1VFdPc2MnO1xyXG5cclxuICAgICAgICBhamF4Q2FsbCh1cmwsIHdpZHRoVmFsdWUsIGhlaWdodFZhbHVlLCBwaWN0dXJlc1RvRGlzcGxheSwgY2hvc2VuUm92ZXIsIHNvbFBhcmFtZXRlcik7XHJcblxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIC0tICAgICBGVU5DVElPTiBUTyBUUklHR0VSIFJBTkRPTSBTRUFSQ0ggICAgIC0tIC8vXHJcbiAgICByYW5kb21CdXR0b24ub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICgxKSB3ZSBjaG9vc2UgYSByYW5kb20gcm92ZXIgZnJvbSB0aGUgYXJyYXlcclxuICAgICAgICByYW5kb21Sb3ZlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpICsgMTtcclxuICAgICAgICBjaG9zZW5SYW5kb20gPSByb3ZlcnNbcmFuZG9tUm92ZXJdO1xyXG4gICAgICAgIHNvbFBhcmFtZXRlciA9IHJhbmRvbWl6ZSgxMDAwLCAyMDAwKTtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9hcGkubmFzYS5nb3YvbWFycy1waG90b3MvYXBpL3YxL3JvdmVycy8nICsgY2hvc2VuUmFuZG9tICsgJy9waG90b3M/c29sPScgKyBzb2xQYXJhbWV0ZXIgKyAnJnBhZ2U9MSZhcGlfa2V5PUxRbGZlbFViTzVmMHJxazVVQVM5UkVGNVhodHdrRzZvRlg1VFdPc2MnO1xyXG5cclxuICAgICAgICBhamF4Q2FsbCh1cmwsIHdpZHRoVmFsdWUsIGhlaWdodFZhbHVlLCBwaWN0dXJlc1RvRGlzcGxheSwgY2hvc2VuUmFuZG9tLCBzb2xQYXJhbWV0ZXIpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIC0tICAgICBDQUxMIFRPIFRIRSBBUEkgVE8gUkVUUklFVkUgSlNPTiBEQVRBICAgICAtLSAvL1xyXG4gICAgZnVuY3Rpb24gYWpheENhbGwodXJsLCB3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZSwgcGljdHVyZXNUb0Rpc3BsYXksIGNob3NlblJvdmVyLCBzb2xQYXJhbWV0ZXIpIHtcclxuICAgICAgICAkLmdldEpTT04odXJsLCB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IFwianNvblwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5kb25lKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGhvdG9zQ29udGFpbmVyLmh0bWwoJycpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5waG90b3MubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBob3Rvcy5sZW5ndGggPiA3KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGljdHVyZXNUb0Rpc3BsYXk7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcud2lkdGggPSB3aWR0aFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuaGVpZ2h0ID0gaGVpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBkYXRhLnBob3Rvc1tpXS5pbWdfc3JjO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUubWFyZ2luID0gXCIxZW0gMFwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFnLmFwcGVuZENoaWxkKGltZyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwaG90b3NDb250YWluZXIuYXBwZW5kKGZyYWcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwaG90b3NDb250YWluZXIuaHRtbChgTm8gcGljdHVyZXMgZm9yICR7Y2hvc2VuUm92ZXJ9IG9uIGRheSAke3NvbFBhcmFtZXRlcn0sIHBsZWFzZSBoaXQgdGhlIGJvdHRvbiBhZ2FpbiFgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZhaWwoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuYWx3YXlzKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJvdmVyICR7Y2hvc2VuUm92ZXJ9LiBNYXJ0aWFsIERheSAke3NvbFBhcmFtZXRlcn0gY2hvc2VuYCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTsiXX0=
