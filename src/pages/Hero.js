
import React from 'react';
import { Link } from 'react-router-dom';


const refreshPage = ()=>{
    setTimeout(()=>{
        window.location.reload();
    }, 200);
}

class Hero extends React.Component{
    render(){
        return(

          <div className="background">
            <div className='hero-section'>
                
                <div className='handwriting'>
       <svg width="210mm" height="257mm" version="1.1" viewBox="0 0 210 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="clipPath2274">
      <path className="signature" d="m122.54 82.294c-3.9232 0-7.6743 3.4758-10.806 8.0529-3.3382 4.8525-3.9924 8.9478-3.9924 10.772 0 1.4798 0.82602 2.8221 1.652 3.1662 0.51621 0.2409 0.9291-0.0692 0.37847-0.44772-0.55064-0.30973-1.4108-1.0324-1.4108-2.6154 0-2.0305 1.5141-6.332 4.3016-10.462 2.4434-3.6135 6.9861-7.6402 9.7737-7.6402 2.8908 0 3.2696 5.7817-2.2024 18.584-3.4759 0.61947-11.598 3.1316-16.691 8.0529-7.64 7.3991-4.2329 14.213 0.92925 14.213 6.5044 0 12.837-12.871 16.175-21.062l0.24077-0.61923c1.2733-0.2409 2.0994-0.55051 2.6501-0.96348 0.41297-0.30974 0.30965-0.72302-0.27539-0.37887-0.44739 0.27531-1.1359 0.44735-2.0651 0.58501 3.3726-8.5348 6.5389-19.237 1.3423-19.237zm-95.221 1.0606c-0.07421-0.0048-0.18167 0.04924-0.32793 0.17829-0.55063 0.51622-1.1701 1.5485-1.4454 2.9939l-2.4778 13.456c-0.03441 0.10324-0.06885 0.241-0.06885 0.34424-1.6863 0.17208-3.235 0.41277-4.474 0.68809-3.82 0.92919-2.8907 2.065-1.8239 2.5812 1.5831 0.72271 3.476 1.5488 5.3344 2.5124-0.44739 3.1661-0.55077 4.8869-0.48194 6.5732 0 0.96361 1.0667 1.3766 0.75694-0.0688-0.2409-0.79153 0.03459-2.7189 0.61964-6.0571 3.9233 2.1337 7.64 4.8869 8.466 8.5348l0.10307 0.37847c-0.10324 1.2733-0.2752 2.6155-0.30962 2.822-0.10324 0.34414 0.13757 0.30983 0.37847 0.34424 0.41298 0.10325 0.99811-0.44764 0.99811-0.89503 0.06883-0.4818-0.06895-1.1009-0.41309-2.3743l0.10347-0.96388c0.30973-3.7512 1.4111-7.3648 2.4435-13.525v-0.10307c0.20649 0 0.41275 0.0342 0.61924 0.0342 1.4454 0.13766 3.3382 0.34434 2.6843-0.0342-0.75712-0.37856-2.1681-0.51638-2.6154-0.55079-0.20649 0-0.37853-0.0342-0.58501-0.0342 0.51622-3.2694 1.0669-6.1947 1.4454-8.0187 1.1013-5.3343 1.4112-6.5732 1.4112-7.1583 0.06883-0.61946-1.067 0.13773-1.3423 1.652-0.30973 1.4798-0.86043 3.992-1.652 8.2594l-0.99811 5.1967c-2.8564-0.17208-6.3666-0.13783-9.5672 0.10307l0.1377-0.65386c1.1357-6.2635 2.4089-13.456 2.9939-15.039 0.2323-0.61946 0.30978-1.1619 0.08715-1.1764zm49.602 1.1418c-0.30973 0-0.44731 0.44757-1.8239 4.1643l-0.82618 2.237c-1.4798 2.4434-3.5102 5.7469-5.2997 8.8098-0.41298-0.13766-0.89475-0.24077-1.3077-0.24077-0.37836 0-0.74325 0.0628-1.0916 0.1771-0.01146-3e-3 -0.02315-5e-3 -0.03502-5e-3 -0.20649 0-2.7875 1.1013-6.1602 2.3058-2.9252 1.0324-3.8889 1.1358-4.3363 1.1358-0.17207 0-0.34404-0.20667-0.30962-0.61964 0.06883-0.55063 0.17186-1.2044 0.68809-2.2712 0.20649-0.37856 1.5e-4 -0.5852-0.17192-0.55079-0.12809 0.0226-0.23545 0.0541-0.32792 0.0935-0.06753 8e-3 -0.12861 0.02249-0.16476 0.0442-2.0993 1.1357-9.0855 4.3709-11.495 4.3709-0.89478 0-1.5143-0.44768-1.5143-1.0327 0-0.79153 0.34424-1.4109 0.34424-1.6862 0-0.2409-0.30966-0.30962-0.44732-0.30962-0.41298 0-1.2735 0.48172-2.5812 1.1012-0.96361 0.48181-1.5484 0.72271-1.8581 0.72271-0.10325 0-0.1377-0.0343-0.1377-0.10307 0-0.27532 0.68834-1.2735 1.5831-1.8585 0.9636-0.65387 1.6517-0.92925 1.9958-0.92925 0.37856 0 0.48204 0.68848 0.82618 0.68848 0.34414 0-0.13772-1.2393-0.92926-1.2393-0.58505 0-1.2734 0.17236-2.3747 1.0327-1.3078 0.9636-1.7208 1.8581-1.7208 2.512 0 0.20649 0.34438 0.51656 0.82618 0.51656 0.34415 0 1.4451-0.44767 2.4431-1.0327 1.1013-0.58505 1.308-0.61941 1.4112-0.51617 0.06883 0.0688-0.06885 0.4131-0.06885 1.1358s0.48182 1.7208 2.1681 1.7208c2.0694 0 8.3077-2.7418 11.119-4.3486-0.20226 0.58528-0.33628 1.4641-0.33628 1.9739 0 0.55064 0.27525 1.17 1.17 1.17 0.55063 0 1.3422-0.17203 4.474-1.2389 1.7745-0.60177 3.0823-1.1197 4.0258-1.5182-1.1536 1.2356-1.8669 3.0668-1.8669 4.6845 0 1.1013 0.58477 1.8927 1.1354 1.8927 0.65388 0 1.1704-0.79157 5.2313-7.1583l1.17 0.51616c0.27532 0.13766 0.44726-0.10313 0.24077-0.30961-0.20649-0.17208-0.58496-0.41296-1.1012-0.65387 1.3422-2.1337 2.7189-4.4397 3.9578-6.539-1.1013 3.2694-2.2713 6.9865-3.3382 10.944-1.6863 6.2634-1.9616 9.0507-1.4454 9.326 0.37856 0.20648 0.75686-0.34387 0.48154-0.4127-0.30973-0.0688-0.17204-2.5813 1.5143-8.5694 1.5487-5.5407 3.3384-10.565 4.7494-14.798 1.3422-2.4434 2.2368-4.13 2.2712-4.302 0.06883-0.34415-0.4472-1.0323-0.75693-1.0323zm113.12 0c-0.30973 0-0.4473 0.44757-1.8239 4.1643l-0.82578 2.237c-1.4798 2.4434-3.5102 5.7469-5.2997 8.8098-0.41298-0.13766-0.89515-0.24077-1.3081-0.24077-0.37836 0-0.74285 0.0628-1.0912 0.1771-0.0114-3e-3 -0.0231-5e-3 -0.035-5e-3 -0.20649 0-2.7875 1.1013-6.1602 2.3058-2.9252 1.0324-3.8889 1.1358-4.3363 1.1358-0.17208 0-0.34444-0.20667-0.31002-0.61964 0.0688-0.55063 0.17227-1.2044 0.68849-2.2712 0.20649-0.37856 1.5e-4 -0.5852-0.17193-0.55079-0.12786 0.0226-0.23516 0.0538-0.32752 0.0931-0.0678 8e-3 -0.12889 0.02281-0.16516 0.0446-2.0993 1.1357-9.0855 4.3709-11.495 4.3709-0.89478 0-1.5143-0.44768-1.5143-1.0327 0-0.79153 0.34424-1.4109 0.34424-1.6862 0-0.2409-0.30966-0.30962-0.44731-0.30962-0.41298 0-1.2735 0.48172-2.5812 1.1012-0.9636 0.48181-1.5488 0.72271-1.8585 0.72271-0.10324 0-0.13769-0.0343-0.13769-0.10307 0-0.27532 0.68834-1.2735 1.5831-1.8585 0.96361-0.65387 1.6521-0.92925 1.9962-0.92925 0.37856 0 0.48164 0.68848 0.82579 0.68848 0.34414 0-0.13773-1.2393-0.92926-1.2393-0.34952 0-0.73648 0.0632-1.2257 0.29609-0.88702 0.28278-2.1282 0.49359-3.5519 0.46124-1.0668-0.0344-2.7875-0.24093-3.407-0.79156 0.13766-0.27531 0.2752-0.55068 0.30962-0.8604 0.0344-0.24091-0.0685-0.37847-0.27499-0.37847-0.34415 0-0.72271 0.55065-0.72271 0.79156 0 0.17206 0.0345 0.30966 0.13769 0.44732-0.65387 1.0324-1.8584 2.0993-2.1681 2.0993-0.17207 0-0.20649-0.48191-0.0688-1.067 0.13766-0.58505 0.30954-0.86041 0.0342-0.86041-0.11235 0-0.2137 0.0347-0.30325 0.0943-0.0637 8e-3 -0.12037 0.0227-0.15481 0.0434-2.0993 1.1357-9.0855 4.3709-11.495 4.3709-0.89478 0-1.5143-0.44768-1.5143-1.0327 0-0.79153 0.34424-1.4109 0.34424-1.6862 0-0.2409-0.30966-0.30962-0.44732-0.30962-0.41297 0-1.2735 0.48172-2.5812 1.1012-0.96361 0.48181-1.5488 0.72271-1.8585 0.72271-0.10324 0-0.1377-0.0343-0.1377-0.10307 0-0.27532 0.68834-1.2735 1.5831-1.8585 0.96361-0.65387 1.6521-0.92925 1.9962-0.92925 0.37856 0 0.48164 0.68848 0.82578 0.68848 0.34415 0-0.13772-1.2393-0.92925-1.2393-0.58505 0-1.273 0.17236-2.3743 1.0327-1.3078 0.9636-1.7208 1.8581-1.7208 2.512 0 0.20649 0.34397 0.51656 0.82578 0.51656 0.34414 0 1.4455-0.44767 2.4435-1.0327 1.1013-0.58505 1.308-0.61941 1.4112-0.51617 0.0688 0.0688-0.0688 0.4131-0.0688 1.1358s0.48182 1.7208 2.1681 1.7208c2.1064 0 8.5314-2.8408 11.265-4.4338-0.0177 0.0785-0.0299 0.1577-0.0354 0.2352-0.0688 0.58504 0.10323 1.6174 0.65386 1.6174 0.61946 0 1.9959-1.6174 2.2024-1.8927l0.41309-0.58501c0.72271 0.58504 2.237 0.9977 4.2674 0.9977 0.59975 0.01 1.1204-0.035 1.5624-0.10586-1.1334 0.89878-1.4996 1.7274-1.4996 2.3428 0 0.20649 0.34399 0.51656 0.82579 0.51656 0.34415 0 1.4455-0.44767 2.4435-1.0327 1.1013-0.58505 1.308-0.61941 1.4112-0.51617 0.0688 0.0688-0.0688 0.4131-0.0688 1.1358s0.48182 1.7208 2.1681 1.7208c2.0695 0 8.3084-2.7422 11.119-4.349-0.20236 0.58528-0.33708 1.4643-0.33708 1.9743 0 0.55064 0.27564 1.17 1.1704 1.17 0.55063 0 1.3418-0.17203 4.4736-1.2389 1.7746-0.60183 3.0826-1.1197 4.0262-1.5182-1.1536 1.2356-1.8673 3.0667-1.8673 4.6845 0 1.1013 0.58516 1.8927 1.1358 1.8927 0.65388 0 1.17-0.79157 5.2309-7.1583l1.1704 0.51616c0.27531 0.13766 0.44726-0.10313 0.24077-0.30961-0.20648-0.17208-0.58496-0.41296-1.1012-0.65387 1.3422-2.1337 2.7185-4.4397 3.9574-6.539-1.1013 3.2694-2.2713 6.9865-3.3382 10.944-1.6863 6.2634-1.9616 9.0507-1.4454 9.326 0.37856 0.20648 0.75725-0.34387 0.48194-0.4127-0.30974-0.0688-0.17205-2.5813 1.5143-8.5694 1.5486-5.5407 3.3384-10.565 4.7494-14.798 1.3422-2.4434 2.2368-4.13 2.2712-4.302 0.0689-0.34415-0.4476-1.0323-0.75734-1.0323zm-132.82 11.251c-0.20394-0.0089-0.46461 0.35275-0.53129 0.55278-0.06883 0.24091 0.0687 0.8262 0.24077 0.89503 0.20649 0.03442 0.65409-0.34414 0.75733-0.65386 0.06883-0.30973-0.13759-0.72273-0.44732-0.79156-0.0065-0.0011-0.01291-0.0021-0.0195-0.0024zm113.12 0c-0.20394-0.0089-0.46421 0.35275-0.53089 0.55278-0.0688 0.24091 0.0687 0.8262 0.24077 0.89503 0.20649 0.03442 0.65409-0.34414 0.75734-0.65386 0.0688-0.30973-0.13799-0.72273-0.44772-0.79156-6e-3 -0.0011-0.0129-0.0021-0.0195-0.0024zm-83.111 1.3284c-0.54038-0.0087-1.3864 0.40741-1.6671 1.5302-0.0978 0.39122-0.09528 0.84929 0.09551 1.2349-6.112 2.6699-8.2964 3.7564-9.8664 3.8929-0.61946 0.0344-1.067-0.20668-1.2046-0.68849 1.2389-0.41297 2.5125-1.1701 2.9255-2.237 0.27532-0.79154 0.06886-1.3418-0.58501-1.445-0.7227-0.13766-2.0995 0.48159-2.7878 2.0647-0.7227 1.5831 0.06896 3.0974 1.8585 2.9597 1.8722-0.13616 4.7896-1.9224 9.915-4.1926 0.13927 0.13792 0.31846 0.25459 0.54442 0.33828 0.72271 0.27531 0.82579 0.3785 0.82579 0.51616 0 0.17208-0.24087 0.61945-0.58502 1.3766-0.82595 1.7207-0.3098 2.5122 0.44732 2.6154 1.7551 0.2409 7.5023-1.48 11.15-4.9559 0.30973-0.27532-0.10317-0.51587-0.44732-0.20615-3.6135 3.0973-8.535 4.646-10.462 4.4051-0.58505-0.0688-0.55044-0.51627-0.03423-1.5831 0.44739-0.96361 0.82579-1.5144 0.82579-1.7897 0-0.30973-0.17208-0.41304-1.4454-0.92925-0.13766-0.0344-0.24079-0.1031-0.30962-0.17192 0.92919-0.51622 1.4799-1.1014 1.5831-1.9962 0.03442-0.27532-0.34432-0.65389-0.61964-0.72271-0.04839-0.0097-0.1009-0.01503-0.1568-0.01593zm0.12337 0.55636c0.02373 5.29e-4 0.04654 0.0039 0.06805 0.01035 0.06883 0.03442 0.06885 0.06889 0.06885 0.1377-0.03442 0.4818-0.27548 0.99788-1.2735 1.6173-0.06883-0.20649-0.03421-0.41314 0.03462-0.61963 0.16132-0.51622 0.74594-1.1532 1.102-1.1457zm-10.654 2.233c0.04717-2.65e-4 0.08907 5e-3 0.12456 0.01431 0.2409 0.0688 0.27516 0.37837 0.17192 0.68809-0.27532 0.75713-1.4797 1.7209-2.4777 2.0651 0-0.27532 0.0691-0.58531 0.24117-0.96388 0.5302-1.3099 1.4841-1.8 1.9401-1.8036zm-8.6662 0.2551c0.20649 0 0.41315 0.0344 0.61964 0.0688-1.2389 2.0993-4.3366 6.6763-4.7151 6.6763-0.30973 0-0.34385-0.72268-0.34385-1.3077 0-2.237 1.8582-5.4374 4.4393-5.4374zm113.12 0c0.20648 0 0.41275 0.0344 0.61924 0.0688-1.2389 2.0993-4.3362 6.6763-4.7147 6.6763-0.30973 0-0.34425-0.72268-0.34425-1.3077 0-2.237 1.8586-5.4374 4.4397-5.4374zm-150.09 0.49427c0.82649-4e-3 1.6566 0.0135 2.4825 0.0565v0.0688c-0.86036 5.2654-1.5832 9.5669-1.9274 12.94-1.3766-3.0973-4.8181-5.7472-8.6037-7.8121l0.92926-4.7836c2.1939-0.25812 4.6398-0.45792 7.1193-0.46921zm-8.2547 0.64153c-0.27532 1.6175-0.51641 2.9596-0.68848 4.1297-1.6863-0.86035-3.4415-1.5831-5.059-2.237-0.34414-0.10325-1.1013-0.55058 1.8927-1.2389 1.0669-0.24091 2.4093-0.44737 3.8547-0.65386zm97.063 1.2042c-5.816 13.284-10.978 20.89-15.521 20.89-3.9921 0-6.5734-6.9174-0.24117-13.078 4.7492-4.5771 11.426-6.9862 15.762-7.8121z" strokeWidth=".40329" style={{fontVariantLigatures: 'none'}} />
    </clipPath>
  </defs>
  <text x="34.746971" y="119.62071" fontFamily="'Allison Script'" fontSize="6.35px" strokeWidth=".26458" style={{fontVariantLigatures: 'none', inlineSize: '8.37414', lineHeight: '1.25', whiteSpace: 'pre'}} xmlSpace="preserve" />
  <path className="signature" d="m27.371 81.226-4.4386 22.711-1.1836 7.1757 0.59181 3.8468 14.721-31.44-0.36988 4.2906-1.3316 6.066-1.6275 9.099-1.4795 8.2113-0.68286 7.4495 0.99811-0.89503-0.71472-2.05-0.83512-2.5735-2.0111-2.6247-2.2579-1.9541-3.3064-2.0895-3.0309-1.5154-2.8242-1.217-1.4466-0.87253 0.11481-0.55107 0.82661-0.50515 4.4086-0.87253 4.8678-0.50515 5.5796-0.16073 5.35 0.50515 1.0103 0.0689 4.133-0.27553-0.66588-0.82661-0.84957 0.18369-2.1813 1.3777-0.82661 1.0792-0.16073 0.66588 0.43627 0.2985 4.3626-1.8828 0.22961 0.2985-0.27553 1.194 0.1148 0.89549 0.55107 0.55107 1.1021 0.27553 4.776-1.3777 5.0974-2.4569 1.6355-0.64306 0.41672-0.12502-0.77094 2.2711 0.02082 0.66675 0.27087 0.39589 0.54174 0.0417 1.5002-0.35421 2.0003-0.62508 3.2921-1.2085 2.9587-1.1252 1.6461-0.35422 0.8992 0.09147 2.2684 1.1266-4.7804-0.92867-1.2179 1.4158-1.1266 1.5681-0.39583 1.1875-0.13702 1.4767 0.13702 0.86777 0.39583 0.57851 0.33493 0.0914 0.89822-0.92867 0.89822-1.3397 1.02-1.4615 0.883-1.4463 0.57852-0.85255 1.5985-2.6338 1.2484-1.9487 2.7403-4.5368 2.0519-3.992 1.3371-2.4833-0.34383-0.30563-0.64947 0.9551-2.6836 7.5062-0.71776 2.4404-1.4834 4.482-1.1803 4.2746-1.4674 6.5715-0.0638 1.7226 0.4466 0.46256 5.0624-10.76 1.6268-0.69718 1.2055-1.0603 0.39216-0.74076-0.13072-0.68266-0.43574-0.18882-0.43574 0.01453-0.65361 0.30502-0.59551 0.46478-0.58098 0.78433-0.37764 1.3944 0.04357 0.63909 0.36311 0.53741 0.56646 0.33406 1.0748 0.029 0.8279-0.29049 1.0458-0.42121 2.8032-1.162 1.7865-0.8279 2.7161-1.1765 1.467-0.98767 0.63908-0.72623 0.24692-0.66813-0.18882-0.45026-0.61003 0.04357-0.66813 0.46478-0.46479 0.61003-0.01452 0.62456 0.17429 0.58098 0.50836 0.61003 0.81338 0.31955 0.37764 0.23239-0.52289 1.2636-0.47931 1.496-0.1162 0.52288 0.20335 0.36312 0.56646 0.23239h0.62456l0.87148-0.15977 1.1474-0.26144 0.92957-0.24692 3.82-1.6703 1.1184-0.72623 1.6558-1.2491 0.886-0.76981 11.79 4.8274-1.5825-1.3073-0.61923-1.3073 0.10321-1.7889 0.63643-2.8037 1.7889-4.1626 2.7693-4.1798 2.8553-3.2166 3.6982-2.5457 1.8061-0.49882 1.5137 0.0516 1.0148 0.58483 0.51602 1.1525 0.24082 1.3417-0.0516 1.3589-0.32681 2.3909-0.98045 4.1282-0.82565 2.5457-3.2166 8.0328-3.8702 7.8436-2.3221 4.0766-2.0297 2.7693-2.2017 2.5285-2.0297 1.5653-2.0641 0.65363-2.0125-0.1376-1.4965-0.91165-1.5137-1.9265-0.34402-1.9437-0.1032-1.6857 0.49882-1.8061 0.80844-1.7373 2.0641-2.7522 1.7545-1.7029 3.1306-2.2533 3.7154-2.0813 3.165-1.2041 3.3714-1.1008 1.9953-0.43003 1.8233-0.34401 1.1009-0.34402 1.0148-0.73964 6.0547 0.30962-0.41282-0.86004-0.67083-0.39563-1.0665 0.36122-1.3761 1.032-1.1869 1.4105-0.1032 0.51602 0.27521 0.37842 0.77404-0.22361 2.5457-1.2213 1.1697-0.49883 0.63643-0.29241-0.68803 1.1352v1.0321l0.086 0.63643 0.46443 0.49883 0.94604 0.172 1.9953-0.32681 2.0297-0.70524 2.7177-1.1352 2.8209-1.2901 1.1697-0.60203 1.8233-1.1525-0.60203 0.94605-0.172 0.70523 0.1548 0.65364 0.34402 0.63643 0.48162-0.61923 1.3417-1.4105 0.94605-1.3417 0.29241-0.73963-0.94604 0.17201 0.24081 0.56763 0.36915 0.75361 1.1152 0.53514 1.3489 0.2502 0.9573 0.0653 1.8276-0.0653 1.3272-0.26108 1.4686-0.50042 0.54393 0.10879 0.69622 0.97907-2.3171-0.67447-1.3163 0.91379-0.7615 0.68535-0.39163 0.8594-0.10878 0.50041 0.27196 0.16318 0.46778 0.0326 1.1858-0.5548 1.0443-0.58744 0.79413-0.35899 0.91379-0.32635 0.71798-0.27197-0.53304 0.54393-0.20669 0.72886-0.0435 0.79413 0.35899 0.65271 0.51129 0.46777 0.73974 0.1523 1.1749-0.1523 0.44601-0.13054 1.9364-0.57656 2.3715-0.89203 2.3606-1.0335 1.5339-0.67447 1.3272-0.68534 1.5012-0.89204-0.78326 1.077-0.41338 0.87028-0.0653 0.83764 0.1523 0.68535 0.4025 0.42426 0.62008 0.0109 2.4912-0.67447 3.1439-1.1205 2.5347-1.0443 2.3606-0.7071 2.1757 0.07615 1.4795 0.93556-5.102-0.65271-0.59831 0.81589-1.0117 1.5121-0.4569 0.82677-0.35899 1.0661-0.0435 0.98995 0.1523 1.077 0.23933 0.45689 0.36987 0.21758 0.36987-0.11967 1.0117-1.3707 1.2619-1.6209 0.53305-0.90291 0.91379-1.5448 1.5339-2.3824 1.795-2.9263 1.6535-2.7631 1.7732-2.6108 1.0987-2.3933 1.1096-2.1431 0.77238-1.3816-0.80412-0.53006-0.46867 1.4547-1.2402 3.0677-1.0661 3.0677-1.6318 5.1346-1.2728 3.9815-1.0552 3.8292-0.95731 4.0903-0.51129 2.6652-0.087 1.3816 0.4569 0.5548-12.04-17.294 0.20397-1.2238 1.0425 1.1785-2.1756 0.04533 0.81723 0.76535 1.721-0.44807-2.3343-0.92917-112.27 0.58923-0.88384-0.81586 2.017 0.06799-1.9037 0.88385 1.4504 0.63456-25.199-13.186z" clipPath="url(#clipPath2274)" fill="none" stroke="black" strokeWidth={3} />
</svg>

                </div>
                

                <p className='web-dev'>Web Developer</p>
                <div className='buttons'>
                <Link to='/portfolio' onClick={refreshPage}>
                    <button class="first-button mr-5">Portfolio</button>
                </Link>
                <Link to='/home' onClick={refreshPage}>
                    <button class="second-button">Services</button>
                 </Link>
                </div>
        
        <footer className="footer-first">
          <ul>
            <li><a href="#"><i className="fa fa-whatsapp" /></a></li>
            <li><a href="#"><i className="fa fa-github" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" /></a></li>
          </ul>
        </footer>
    </div>
    </div>

            )
        }
    }
    
    export default Hero;