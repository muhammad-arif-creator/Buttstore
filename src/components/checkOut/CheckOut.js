import React from 'react'
import styles from '../checkOut/checkOut.module.css'
const CheckOut = () => {
  return (
    <div className={styles.cart}>
      <div className={styles.cartHeader}>
        <h1>Your Cart</h1>
        <a href="">Continue Shopping</a>
      </div>
      <form>
        <table>
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.product}>Product</th>
              <th className={styles.price}>Price</th>
              <th className={styles.quantity}>Quantity</th>
              <th className={styles.total}>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.product}>
                <div className={styles.productImage}>
                  <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgSFRUYGRgYGBgYGBgZGBgZGRkYGhgZGRgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHxISHjQhISs2MTQ0NDQ0NDQ0NDcxNjE2NDQ0NDQ0NDQ0NDE0NDQ0PzQxNDQ0NDQ0NTU0NDE0NDQxNP/AABEIAQMAwwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAAEDBAUGB//EAEUQAAEDAgMEBwMICQMEAwAAAAEAAhEDIQQSMSJBUWEFBhMycYGRUqGxFiNCYpLB0fAUFTNTcoKio+Gy0tNDk+PxB3PC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACsRAAICAQMDAwMEAwAAAAAAAAABAhEDEiFRBBMxIkFhFDJxgZHR8CMzsf/aAAwDAQACEQMRAD8A87cFWxI2T4Ky5VsT3T4JFGYUTCoyUbCmId43pgUL3GUnCLoGJyQKYlASgQUpFBKUoAlaUQUAKPMgLJZTFR5k+ZAFrBMkyr7mqtgLNn8/nRWHvXVBVE55u5FbFCxULdFLin2KrsfZRLyXHwSJihzIS9RRYZUVXcnL1HUOiTEgAUpTJKCh5SXQYbqvUe1r8zW5gDBBkA3CZX25cE648hOVXFHZd4K25VcWNl3gsrNDIKNhQFCVQhybyplAFO1JgiNwugUrxdRFMGJJJJAhJJJIASkY2SowpmajxHxTQGnTYY/P54JnUzxVpoQuXXWxzarZn4hkNKjYLKbGd0qKmLLKXk1j4FCaEihLlBY5CiqbkeZRVDokwRGAnhJpi6QN1AzsaPWymGgOpvkAAwWxpuSXHwUlp3ZckduJ0TgquL7rvAq68KpixsO8CsUamKU4FikU6oRGjY7chcEwQBO/VQkKUfcheEhtEaSSdMkSSuYLo+rWMU6bnHfAsPEmw81pDq+1tq2IpsPsszVXDxa3RS5JbWaRxSkrS2MJoUjRceIXQs6Fw+59d3MUIHv8UD+h6TTIruZewq0XsE8C4WCSyRst9PNL2/cEIHKTE4aqxpflDme2x2dnmR3fMBZrsSeHuXYssZLY4pYZRe6ofGHZKiboo69QkXUjdFnJ2zSKpAuTBsp3ImpDAyc1FVborKhq7kn4BFeEoTjVSKCiOCkjSQB1D2qni2bLvAq+8Kpihsu8FBRz7momNTuSYqFQDmIVPKZzEWFAtTOCUQkSgYELpcH0KykG1MUHFzhLaDbPI3F5+gPf8FP0PgBh2NxFRodVeJosOjG/vXD4fjpTx/SBaSZzVHXc4/m3ILKU23UTphjjFapef+F/GY+G5ajhTZ9GhS2RHBx1Pn6LN/XmW1Gmxg4kAu9Ssaq8kyTJTNTWNVuS87v07Gx8pMR7fuV7Bdaasw5rXjfuP3rmlNhtVUcUG6aRL6jIt02dxhMRhqxlk0Ku4t2ZPC1neCqdJ9D3h4ax7u7UaIpvPB4HcceI9FggLf6I6bAHY4jbputJuW+J3jnqPhpLHKG8d1x7hHNHJ6ZpJ8nLY/DuYXMe0tcDcH83HNA3Rdl090VmApOMmJw9Q/SGvZPO/kfPjPH5CLEQQYIOoIsQURmpGeTE4OiJyKmmenarMglBV3eCnKr1dfJSwSIhqpIUbdUYk6fckkMWVJPlPEeqSdAdY4Kni+47wKvvCo44bDvA/BQWYDkmo20ydAndQcNQfJAEaSRZzKbLzKAHWt1d6Pa97qlT9lSGd/P2W+Z9wK0sN1fYzC1q1eRUawFrZhzc1qZcOLnWg7ucxHha4bh2UQIlxq1HT3os0HhBBH8pWUp2nX4OmOJxknLi6B6X6RdLqju+/Qey3cPACFzTjNzqbqXGYjO4u9OQ3KKVUY6UZZJ6n8DOTtTOTtVkDqbDaqIBT0LFOD3FKNougp0LSiXVZg1RvdCYvtmHBvdDu9Qfva5tw3y1HKQs3p3Dk5a0Q4ksqN4VG2nzA9w4rNdXcxzXtMOY4OaeYMrsel6TagzN7uJpB7f/ALGNDh5kRP8ACuLItGW14Z345dzDT8o4RyJqYnRFvK2OQRUFUX8lPKhq/ckwIG6o2uiQoxqpS2UkMWZOhyJJiO5bUEwoMbTa5jp4H4JZoKr41+w7+E/BZ2bUZDwB3SioHiqpekKkJtgSV2NJsFuUejmYRja9Z0VSZYzLmLba5ZEuEi5MDmUXVnA5i7EubLaZAY223WN2tE8LG+kg6AqPF9E4jEVHPlrydSCcreDWkjQcv8rCU7dXSXn+Dox42o2lbfgsY4uqYajQYCX4ms6o68k5SWNkuOkQdQLLD6UzML2XBzZCN4DBlykixM6xvJXcdWsLWw7x2jG1GZWtEkF9MtLnNyGLiXGdN3CDSxfVt1R76jmzme9wGciA95cNBrBEqFljF0/BtLBOStJ34PPw1PlXbnqgPY/un/Ym+SH1D/3T/wAavvw5MfpMnBxMJwF2vyP+p/dP/Gl8j/q/3Hf8aO/DkPpMnBxcI2rsvkh9Uf8AcP8AsSHVL6v90/7EfUQ5KXSZeDk2knejJIGq6tvVWPof3T/sSPVf6n97/wAaf1EOSvpJ8HJvZIuVv9EitWoiiySaTw9rrDIxzHyATqMw+ETuvDquN7D/AN7/AMa0ehOi3UKmcAZCCHNz5nAwYIJa3fFlGTqY02t37F4+jlqpqk/NHMYHoVopOxNYltMAhjRZ1R24jgJ9fALGdTMF24EDzMwPcfRd50v0XVr7JY0NaIY1r8oZFhshsOtussDGdWq7Gl8tdxa0meWog6q8WdPdvd+3BObpKpRWy9+TDp0HOBcBIbrfiq9ZpVxzXMJaZaQSCJi4MEFA4Los5HjRn5SpQ0q0WygLOaCHj4IMhSRZTx+KSdkaWdNUddV8a7Yd/CfgpqxuquM7jvA/BYmhiF6TRNgJJtbWdwCFbHVik3tu1cJbQa6s4ccndb4l5am9lYRWqSR1uF6OcXU8G0xToM+fcPpVXiXtB4wQOQLl0NOg1gytEAaAJ+rOHy0iS7M57n1HOiMznGCYnSRA5AK45l15OWcnKv7+T3sEVGPgrAJ4VgMT9msW5G+xXhKFP2acUkbj2K8JwFZ7NMaaW4WiAAJsisdml2aNwtFYsS7NWRTT5EKLHaKZYnDFb7MJBgVJMLKuVRYlmzpvHxV/IFBjW7DjwEqknYrR5V0+wtxNYfXcfJxzD4rNc8rpuu1JramYDae6Z4tyMMHzcPRcsCvYxS1QTPCzLTNoMOKjc8olEVoYsLMkhSSJOpeySq2PZsO/hPwWi9oAVPGu2HeB+ChCObLbLWpbGEIFnYioBf8Ad0o37gXuH2FkuctfGNipSogT2baLMvFziHvH23keSGVDbf8Au5630SzLSaBHdbppcZrcrqV4RYIbA8Gj+kI3NXjvdnvx2RAEQSIThBQoTtSTFABqB1YaC6jxTiGo6DYA0iB4zvlS2NINjpsQR7/cjc2PPQ7io3iQYjlOk7k2FrFzSHXyucAfAkfcPRCB7Bp0ydUhiKZPCUJgDKhxXcd4FWSxQYpsMceRRYHCddmSwOjQsJN7B1PLfzaFxK7vrgyabrxlZSOlnHTLr9efILh3U3ASR8F6fTv0Hj9WvWASmSSDSf8A2FtZyjJKX9Hd7PvH4pIsDpqtRUcW+WO8D8FO9yq4k7DvA/BSQZ3R1MOqNDu6Dmd/C0Fzv6Wkeac1S+pndO0/M7LrtOzENPG9ksMcrHu3uhg8CQ53uaB/OnwbZe0TG2y/DaF/JDGvNHt2AM0xv2W3/lCnVbo18giZNxMRJ72m7vQrIC8Zs9+IJamyqUBPCdjshypyxShqcNSsLKGMZsoy02iNEukRYDiQFFj67qTC8NznO3K2Y3CziQQBIPqklborVSsMB28AIOjxsO/jf/rco8VXqdm55a1r84sDbK54s0cgSI5Dip+igezM656n+t6pxr9xa7W6pk4anyqSEoQFkeVOGo4ThqYWCGqp0k3YIGpt6rRyqhjK4aS491jS938omPMhBKkcT1rqw2sQ4C4bBGuQsYWjnLD6LgQYMhdn1hLjQJIEnKXTrJcC4iRvJXHOiBcautv3a/ncvQ6f7P1PO6z71+CN7purDcY4DQHyH4KsUxXQzjLH6WeA9B+CSrSkikKzoyFVxXdd4H4K05VcSNl3gUhUZjnWa3gJPi6/wyjyV7odk1qYkD5xmunfGvJZuaSStfqy0nE0RbvzfTZBdf0Uz+1seNXNL5R61hnEEOnMD9Ie0JIBEAC2Ya7gtB3EaG4WPUEt0ObM0hzC0NkSQTJ5BXKGNkEWLgbtDhLXb/5TYheNHwe+1TLoCJU/0h3sOTjEO/dv9FQqLrQpAs8Yp37t/wBlJ2LPsP8ARFkuNhY6LW+kPiljHlrHOABABJBaXSBewFyfBVqtUugZXC41HMK6HgzB0MHkdUXuVVJGcKT6wa5+ywbQZkcwz9YOuPRWujhsH+N/+tyle8DgBw0A4AcAquGxLWMAuSXONhNsxTbXt4CnXyX0oVT9N+q/7JS/TD7D/slIdMuBE0KkMU792/7JRfpTv3b/AEQiWi1XqhoJK5XrDjMrW0tX1CHuEGzGu2QRul1/5CtXGYoAZ6my1tyJGZ53MYN5JgLh6uJfUquqPJaXycoDoAGjQdNkADyWsI27ZLaWy/Ufp2nOHdeYAJJBEQ4GBJ5ELiDqvQ8TQLqTmwNoOa3TVzYBMGdSvPCbrs6Z+lr5OPrY+pP4AKYonJMXScDBhJTZ28Ph+CZOxG+4Kjjjskcj6D8hXajoueQ9TCo4vuuPIgeWvv8AgoQPwZbV0vUmlmxLDE5WvdH8pb/+lzLSuo6igGu6RMUnbO87TdPzvU5tsbfwzTp98q/KPRnGA0S5pzXaA4g7JtP50UGLwwIbmpjvOILpcNIvLTxIhWC+zRmbEnZOXNoOSF+UhsB0y7e2CeBg6LxovfY+gaMLFdCtu5vYi4tABE63DR5JmdCtvtvBgmGhgFhzdJXQOY/L3B3m74PjZx0SLoDpqEbJtld6kngtlkaXkyeOLfgw6HQzoG3ItJLgHR9uJQjorXNVqNue6SbTa+fhyW/TpTlOQuuNqXC/GMsJUwWzBDBJ706ybyWqlkfJPbiYTOjHh4yVqhgNdDnEAjcTtATbRaGJxWKaJDQeUsHnaVaeWlwl4dLRZpEk7yNi4UdWiIMUnC7ZkAze0bItxQ3bV7jUUvGxR/WGJO5vgf8ADCsV+DxTszs9UtzOIDHvEXJLRFjC6qo0wL0xxlrQ6OUAKmxjROZxmT3MotNtTqp16XsN49S3MhvRTwf279Adt74vuQnA1bfOMJM/Tfz0k3K2wBmGXMZaIDzqOPeAkozTcI2QLnR2g42de+5T3XyUsUeDBp9FOGbO9ztBfLaT9Ek2RjodocIbTc2DJflJndpaOK2ah12zpPddsi8m8z/hTFkwYmRBJLxA8DxhDzS5LWKK9jnK3RxDwQ1rTBtSDWtI3myrMwrgQWtJG9z4zRy56ahdS9rhlmWbst3SYsASFSpgzYF5mC8ktA3GwEWVLLIl4olOn3Ta9iSLiBu0XnvSFLLUe2IyuIA4CTHuhekaS0nLqGsElp3yTpuNua4DrHTLcQ+xAOVwnfLRJ8JldPSS9TRxdfH0xfyZjlYwVIucGtBJJEACToVVJUuFxLmOD2m4Xe1seVasl/Qau+m/7J/BJdVR61Ui0F9JpdFzDbn0TLPXLgrT8lDETBA13WJ0udAdyqY5oDbaFgI8C2fz4LUwz8r2uMxdrubXa+8A+So9JMHZkt0a57PIOLm/0n3Iv1UVScW/cwmrreoIHaVCTEMAkd67ptytfyXJBdx/8fNgVHAhslrZiXGJJHIXHn4JdR/qY+kX+ZHdQ7ZOURtbUmd24cfuTlwhoNTebWE8rjcoyBIlrpg32Q3XfP51RkO2e6Be4Akf1b14yR77BdTbHcd3heGxPnuRuFjBpi1gQ2Z4GNyhc5sftHd4CMrju7uqN9OzvmplpEl7pI4QdExDlzZbLnTI7sNBPAgFKg2QS1ua57x5m13fclnIgdpl+qJM8gS1BT2gZzVLnu+PJuvmmhMlh4cJa1uyJLTMfVgOE+qge8Q751+76L9nXmZlGKYDhFNzdkXdBA8bG/kmNQw75ylu3euawV+5IdSk6GkUs1wczi5pF9YJUFFpbm/6dzdpc43OsaBS1GghpyvdcbTIy674GigosAzQ0tudqrBb5SCY8FE1uVF7CbUlzR2rnSNMve52BMJqlC37H6Q43NhMEaIgTLZdSi85R6BsoaobtWqi4na08I3KKLskc4gwXtbbuxebRq0WSyBwa6M99WZY4XsDHmUQDrFobHFxBcPMEyhcYbLjkj2b28nfckMFzIAgZYdHzmXSblpF/BZ9cQTmveQKcC3Od61GmQ5ozOI+i7M0chmmPcq+JaQSSAwalzXSSdLi3K91UXTAzoLXujYBNy6LzaGm/JcZ1wpRUa692xyEExHkQu1qkS0tl0ttns0x9LkZXM9c2bDXW2XkaWOdskj7A9V19M6yI4+sjeJ/BxhTsbKYqSiSNCR4L0/Y8ReRuyPBJW+1PtH1KSnUXpRuPCE0M2akP+o2Wfxtkgf6h5I3KMkxI7zDnb4SJ98H1UtDi6e5zi7vqI0ik4w3aedbkgNboORlcx0thTn7RjSWVAHCBME95vjM+q67qjSLaLczGiXOdmmHAyQM1uHuhZdTK8R0dHGs1cWdQ197OcdkbMPAuTeb2/BShgluxlhphxmBJvJI18lCX6y5rtIyxm03lExzcwAc8nKLGY331HxXlJHskjqjovUZGbcQbR4C6ifkh1n6XILbcxG9SODrfNtG1Pfvp3vuhDUrd750i2mXTmSdQqrcQbWutlayN+YNJHOQU2gOYgXPcgHxmZSIDspLC+CIcZHnFrIaRyh0Ds7m9zN9d9kxDMezM3KXnZsHGxHtGSApajHQdinqNzRPMwdyj7clwBqh0jujUn00QPpNh3zDt2/XwunYias9uyHOcDIs0GDfSxKjoNaS7KS88HSAOUkgIzVcAAHtZpsnhytqgY/MXAuD/qtuY52N0BuOKbgW7DGxNwQct90G866oKh73zzt30O7rxmZ+5OaYlvzbxrrpr9If4ROqOvD6XIQfR1gk0O2NUph2U9nn4OdmaR5G0JqbMrXQBTub3N51NojzRPaDlkPdcXp2b4GBompMgOgEX1qbQ8ACpaGmO1wcSM7XyJymJPOzTZVn0oLS2llMRmP0QLXEE3VluaRPZ6QYBB8G6WUFVjY7tWzuJIJ4Hi2/gktiilinA5czy+5BEQHH2ZA3BYPWxnzBLgGmWw3WCCBY8YK6HFh2UjNTF9AI8Zi0rG6Zol1CoGtcDlmYLs3FrfhyW+F1NP5MOoVwkvg84KsYWsWnkdUzsJU9h/2Xfgk3DvF8jvsn8F7B8+nuaH6NVN2udG65TIKdRwA1TLLc2tG+WTYJwxrNo34+BsQPJXX08to9AqOKYSND6FOiLrcVI5Wvpm5p7bebDcx5EO81q9BVg6+Qg7iYyuE6ETY2WPg6by/O0bTGDY9trSczPHKbeCu9HV205aLsdJD8oLoPdBBuCNCNZCwyxcotLydeCcYyUnsvB2ILhJgM0u05ptwBRCqSYzl9hsgXJ46Gyxm9KUBcPEkaEAtHi3LmTu6YpgAl9LSIYACPMwQOULhWKXB6feh5s03hv7up3uG+PDuo3vdtQaWlgZmeDoGizKWPY9ssrTcGwMjiCCQfOEx6TpExnpG0HM4td7gZ9U+3LgO5Dk0swgZi8mRenZvgbSmpG7omZ1qwW+Atosv9c0w4MbWY3cLkjw1j1hTP6QY0lz6rSDoHWHmZuk8cl7B3YP3NAucC2exA3wNL6NsgqFu1+2FpsdNe7DVTdimNAcRTETBa97ok6yQEFLpDOC5tduUiAAMxB4l038Edt+Q7kfFmmCSG5Ws3WeBn8Zg3QtdBdmDAD7AGY8zpCy/1hTJyF7HOF4e4i/KCSPBJ/STGOgOYxzjrnd9/4J9uXAd2PJoiszZh7zMwDO1ff4KV7XHNsUzIG9u1rYrOqdJwAX12gDvHWfDSPegGKpOBdsFpAkio+TruHdPglofAdyPJquqgZczywyBDbj+HVPRqBxcA7OeDtkDlqsyh0sCYZUa1o1El08Y4eM+SOp0mwGH1WmdGmW+rp/BHbl4oO5HzZpNpmWns2NgG4cJaOUKGtVaAfnXiCL5dNLc5+9Uzi6TQHHJaYh7na/HzlE3pfMP2jeQ2iY5iBdPtSfsLvRW1jYlhLSezaQYuXCXcJB0VVjw0y5ztBs2jXdH4p3VGvnLmk63gnny8rqCux7hkBkawOPCd60xY3qVmPUZkoMtHGs4IhiWcFQHRb+JRDoypxXpUeKXu2p+ynVH9W1UkaQsvfq6dUX6pB/8AS3RTClDAoQ3IxMN0I3MDMEb4Un6gpkm0yZW40QpKaK3spSbVGK3q5R9gJ/kzQ9gehW/PFOCNPipLMH5MYf8Adt9E3yXw/wC7b6BdD+dUziOaBnP/ACYw37seiif1Yw3sD0C6FwnT4oPH7lLbGjnndWcNpkHomHVXDex6GF0YaOJRCgUWx7HM/JDDex7ymPVDDex7yuoyRrPknACqxHLfI/DeyfVEOp2G9k+q6mE8jiUCOYZ1QoDRvvKL5I0PZPqunaOCKEAcw3qrSG4+qmZ1apjcV0bWc0eSEE2+Tn2dAM3WS/U7G2AW85w5qGoZTSJlJtbsyhg2jchdShX3KF4WlGNlPIkrGVJAxNpt4n3KQUxxKrB6MVEgLPZt4lGymOJVXtEhUTC2i+1g4lGGDiqArJ/0hGwapcmiKTeKLsx7XuVBuJRDEIpD1S5LnZN3kp24dm4qn26MVkaYi1S5Loot4+4JHDs4qmK6cV0aY8BqlyXBRHH3BF+jtOp9ypiunFdGmPAanyWThWDf7kjSHtf0hVX4hLt0VEWp8lvshx9yTWAaH3Kr26Qro0oNciyWn2vd/lMaY4qsayXbIpD1SJ3U/re5Qup8x6ITWQOqp0hWxOo8x6KN1E8Qk6qo31U9iRdjzHvTqLtU6Nh2Y4rO4+4Iu2dxTJLIsftncU4rO4pJJiHFZ3FMazuKSSYCFZ3FTseeKSSQydpRhJJAhwnCdJMBwnSSQAztU4SSSAJOEklQmJJJJAAlCUkk0SA5A5JJIZGkkkqA/9k="></img>
                </div>
                <div className={styles.productText}>
                  <a href="">LEON CRUSHED ICE IN BLUSH W/ GOLD THICK CHAIN</a>
                  <a href="">Remove</a>
                </div>
              </td>
              <td className={styles.prrice}>
                <span>Rs.167,416.42 PKR</span>
              </td>
              <td className={styles.quantity}>
                <input type="number"></input>
              </td>
              <td className={styles.total}>
                <span>Rs.167,416.42 PKR</span>
              </td>
            </tr>
          </tbody>
        </table>
        <div className={styles.cartFooter}>
          <div className={styles.cartSubtotal}>
            <span>Subtotal</span>
            <span>RS.167</span>
          </div>
          <div className={styles.cartShippingRate}>
            <span>Tax included and shipping calculated at checkout</span>
          </div>
          <div className={styles.cartButtons}>
            <button className={styles.checkOutBtn}>CHECK OUT</button>
            <button className={styles.payPalBtn}>PayPal</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CheckOut
